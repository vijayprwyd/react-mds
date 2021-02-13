import React from 'react';
import './menuitem.scss';

export function MenuItem({ children, selected, value, disabled }) {
  return (
    <li
      tabIndex="-1"
      disabled={disabled}
      value={value}
      className={`menu-item ${selected ? 'menu-item-selected' : ''} `}
      role = "option"
      aria-disabled = { disabled }
    >
      {' '}
      {children}{' '}
    </li>
  );
}
