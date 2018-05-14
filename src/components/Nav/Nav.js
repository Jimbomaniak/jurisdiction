import React from 'react';
import Toggle from './Toggle/Toggle';

function Nav() {
  return (
    <Toggle>
      <Toggle.On> The button is on</Toggle.On>
      <Toggle.Off> The button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
}

export default Nav;
