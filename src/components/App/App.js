import React, { Component } from 'react';
import shortid from 'shortid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { confirmAlert } from 'react-confirm-alert';
import ContactForm from '../ContactFrom/ContactFrom';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Styles from './App.module.css';
import '../../transition/icon-appear.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const local = localStorage.getItem('contacts');
    if (local !== null) {
      this.setState({ contacts: JSON.parse(local) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = e.target.elements;
    const { contacts } = this.state;
    const itemContact = {
      id: shortid.generate(),
      name: name.defaultValue,
      number: number.defaultValue,
    };
    if (contacts.find(item => item.name === name.defaultValue)) {
      confirmAlert({
        message: `${name.defaultValue} is allready in contacts. `,
        buttons: [
          {
            label: 'Yes',
          },
        ],
      });
    } else {
      this.setState({ contacts: [...contacts, itemContact] });
    }
  };

  deleteContact = e => {
    const { id } = e.target;
    const { contacts } = this.state;
    const filter = contacts.filter(item => item.id !== id);
    this.setState({ contacts: filter });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <TransitionGroup component={null}>
        <CSSTransition in timeout={500} unmountOnExit classNames="logo" appear>
          <h3 className={Styles.allTitle}>Phonebook</h3>
        </CSSTransition>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h3 className={Styles.allTitle}>Contacts</h3>
        <Filter
          length={contacts.length}
          filter={filter}
          handleChange={this.handleChange}
        />
        <ContactList
          filterContacts={this.filterContacts}
          onClickDelete={this.deleteContact}
        />
      </TransitionGroup>
    );
  }
}
