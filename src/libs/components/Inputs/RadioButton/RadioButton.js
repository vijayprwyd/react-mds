import { any, string } from 'prop-types';
import React, { useState, useRef } from 'react';
import { createRipple } from '../../Feedback/Ripples/ripples';
import './radiobutton.scss';

export function RadioButton({ name, children, ...rest }) {
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
    <label>
      <span
        className={`shape container rippleAnimation ${
          focused ? 'shape-focused' : ''
        }`}
      >
        <div className="rippleDiv" onMouseUp={handleClick} ref={domref}>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="radio"
            className="radio-input"
            name={name}
            {...rest}
          />
          <span className="checkmark" />
        </div>
      </span>
      <span className="radio-label">{children}</span>
    </label>
  );
}

RadioButton.propTypes = {
  name: string.isRequired,
  children: any
};
