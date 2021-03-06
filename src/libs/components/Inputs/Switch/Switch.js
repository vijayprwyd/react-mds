import React from 'react';
import './switch.scss';
import { any } from 'prop-types';

export function Switch({ children }) {
  return (
    <label role="button">
      <span className="switch-icon">
        <input className="slider-input" type="checkbox"></input>
        <span className="slider-circle"></span>
        <span className="slider-focus"></span>
        <span className="slider"></span>
      </span>
      <span className="switch-text"> {children} </span>
    </label>
  );
}

Switch.propTypes = {
  children: any
};
