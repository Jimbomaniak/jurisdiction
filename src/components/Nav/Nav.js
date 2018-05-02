import React, { Component } from 'react';
import NavItem from './NavItem/NavItem';
import Button from './Button/Button';

class Nav extends Component {
  state = {
    isOpened: false,
  };

  handleClick() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    return (
      <div className="nav">
        <Button isOpened={this.state.isOpened} click={() => this.handleClick()} />
        {this.state.isOpened && <NavItem name="Услуги" />}
      </div>
    );
  }
}

export default Nav;
