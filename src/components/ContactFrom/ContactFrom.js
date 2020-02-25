import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './ContactFrom.module.css';
import * as helpers from '../../services/helpers';
import notification from '../../services/notification';

export default class ContactFrom extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  state = { name: '', number: '' };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = e => {
    const { name, number } = this.state;
    e.preventDefault();
    const verification = name.length >= 3 && number.length === 10;
    if (verification) {
      this.props.handleSubmit(e);
    } else {
      const message =
        'Заполните форму по шлаблону, name oт 3 символов, номер 10 символов!';
      notification(message);
      return;
    }
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={Styles.addContact} onSubmit={this.reset}>
        <label className={Styles.input} htmlFor={helpers.ids.name}>
          Name
          <input
            autoComplete="off"
            pattern="[A-Za-zА-Яа-яЁё]{3,20}"
            type="text"
            value={name}
            onChange={this.handleChange}
            id={helpers.ids.name}
            name="name"
            className={Styles.widthInput}
          />
        </label>
        <label className={Styles.input} htmlFor={helpers.ids.number}>
          Number
          <input
            autoComplete="off"
            pattern="[0-9]{10}"
            type="number"
            value={number}
            onChange={this.handleChange}
            id={helpers.ids.number}
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
