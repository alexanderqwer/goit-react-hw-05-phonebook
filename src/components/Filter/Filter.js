import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Styles from './Filter.module.css';
import * as helpers from '../../services/helpers';
import Pop from '../../transition/pop.module.css';

const Filter = ({ length, filter, handleChange }) => {
  return (
    <>
      {length > 1 && (
        <CSSTransition in timeout={250} unmountOnExit classNames={Pop}>
          <label className={Styles.findContact} htmlFor={helpers.ids.filter}>
            Find contacts by name
            <input
              type="text"
              id={helpers.ids.filter}
              value={filter}
              onChange={handleChange}
              name="filter"
            />
          </label>
        </CSSTransition>
      )}
    </>
  );
};
Filter.propTypes = {
  length: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Filter;
