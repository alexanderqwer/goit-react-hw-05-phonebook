import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ContactItem from '../ContactItem/ContactItem';
import Styles from './ContactList.module.css';
import Pop from '../../transition/pop.module.css';

const ContactList = ({ filterContacts, onClickDelete }) => {
  return (
    <ul className={Styles.list}>
      {filterContacts().map(item => {
        return (
          <CSSTransition in key={item.id} classNames={Pop} timeout={250}>
            <ContactItem item={item} onClickDelete={onClickDelete} />
          </CSSTransition>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default ContactList;
