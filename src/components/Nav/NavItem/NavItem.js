import React from 'react';
import PropTypes from 'prop-types';

const NavItem = props => <div className="nav-item">{props.name}</div>;

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavItem;
