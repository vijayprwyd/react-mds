import React, { useState } from 'react';
import { Select } from './libs/components/Inputs/Select/Select';
import { MenuItem } from './libs/components/Inputs/MenuItem/MenuItem';

export function SelectPlayground() {
  const [selected, setSelected] = useState({
    value: 10,
    text: 'Ten'
  });

  function handleChange(evt) {
    setSelected({
      value: evt.target.value,
      text: evt.target.innerText
    });
  }

  return (
    <div
      style={{
        width: 'fit-content',
        margin: '20px',
        minWidth: '190px'
      }}
    >
      <Select
        value="10"
        placeHolder={'value'}
        id="age"
      >
        <MenuItem value="10"> Ten </MenuItem>
        <MenuItem value="20"> Twenty </MenuItem>
        <MenuItem value="30"> Thirty </MenuItem>
        <MenuItem value="40"> Forty </MenuItem>
      </Select>
    </div>
  );
}
