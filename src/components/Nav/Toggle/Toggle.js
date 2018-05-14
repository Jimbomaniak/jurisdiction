import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hamburger from './Hamburger/Hamburger';

class Toggle extends Component {
  static On = ({ on, children }) => (on ? children : null);
  static Off = ({ on, children }) => (on ? null : children);
  static Button = ({ on, toggle }) => <Hamburger on={on} toggle={toggle} />;

  state = {
    on: false,
  };

  toggle = () => {
    this.setState(({ on }) => ({ on: !on }));
  };

  render() {
    return React.Children.map(this.props.children, childElement =>
      React.cloneElement(childElement, {
        on: this.state.on,
        toggle: this.toggle,
      })
    );
  }
}

Toggle.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Toggle;
