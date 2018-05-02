import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  const isActive = props.isOpened ? 'is-active' : '';
  return (
    <button
      onClick={props.click}
      className={`hamburger hamburger--collapse primary-navigation-toggler ${isActive}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};

Button.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
};

export default Button;
