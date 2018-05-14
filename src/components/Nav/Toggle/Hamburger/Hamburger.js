import React from 'react';
import './Hamburger.css';

const Hamburger = props => {
  const isActive = props.on ? 'is-active' : '';
  return (
    <button
      onClick={props.toggle}
      className={`hamburger hamburger--collapse primary-navigation-toggler ${isActive}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};

export default Hamburger;
