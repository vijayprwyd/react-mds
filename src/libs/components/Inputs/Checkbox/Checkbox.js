import React, { useState, useRef } from 'react';
import './checkbox.scss';
import { createRipple } from '../../Feedback/Ripples/ripples';
import { any, string } from 'prop-types';

export function Checkbox({ name, children, ...rest }) {
  const [focused, setFocused] = useState(false);
  const domref = useRef(null);

  function handleFocus() {
    setFocused(true);
  }

  function handleBlur() {
    setFocused(false);
  }

  function handleClick(event) {
    event.preventDefault();
    const ele = createRipple({ event });
    if (ele) domref.current.appendChild(ele);
  }

  return (
    <label className="clabel">
      <span
        className={`span1 cbox-container rippleAnimation ${
          focused ? 'cfocused' : ''
        }`}
      >
        <div className="rippleDiv" onMouseUp={handleClick} ref={domref}>
          <input
            type="checkbox"
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="check"
            name={name}
            {...rest}
          ></input>
          <span className="checkbox pri"></span>
        </div>
      </span>
      <span className="span-label">{children}</span>
    </label>
  );
}

Checkbox.propTypes = {
  name: string.isRequired,
  children: any
};
