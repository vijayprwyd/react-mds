import React from 'react';
import './menuitem.scss';

export function MenuItem({ children, value, disabled }) {
  return (
    <li
      tabIndex="-1"
      disabled={disabled}
      value={value}
      className={`menu-item`}
      role = "option"
      aria-disabled = { disabled }
    >
      {' '}
      {children}{' '}
    </li>
  );
}
