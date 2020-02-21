import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import Styles from './ContactFrom.module.css';
import inputId from '../../services/helpers';

export default class ContactFrom extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = e => {
    const { name, number } = this.state;
    e.preventDefault();
    if (name.length >= 3 && number.length === 10) {
      this.props.handleSubmit(e);
    } else {
      confirmAlert({
        message:
          'Заполните форму по шлаблону, name oт 3 символов, номер 10 символов!',
        buttons: [
          {
            label: 'Yes',
          },
        ],
      });
      return;
    }
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={Styles.addContact} onSubmit={this.reset}>
        <label className={Styles.input} htmlFor={inputId.name}>
          Name
          <input
            autoComplete="off"
            pattern="[A-Za-zА-Яа-яЁё]{3,20}"
            type="text"
            value={name}
            onChange={this.handleChange}
            id={inputId.name}
            name="name"
            className={Styles.widthInput}
          />
        </label>
        <label className={Styles.input} htmlFor={inputId.number}>
          Number
          <input
            autoComplete="off"
            pattern="[0-9]{10}"
            type="number"
            value={number}
            onChange={this.handleChange}
            id={inputId.number}
            name="number"
            className={Styles.widthInput}
          />
        </label>
        <button type="submit" className={Styles.widthBtn}>
          Add contact
        </button>
      </form>
    );
  }
}
