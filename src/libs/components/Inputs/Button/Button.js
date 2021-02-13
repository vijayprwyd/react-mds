import React, { useRef } from 'react';
import './button.scss';
import { createRipple } from '../../Feedback/Ripples/ripples';
import { any, bool, string } from 'prop-types';

export function Button({
  variant,
  children,
  className,
  rippleClassName,
  shape,
  disabled,
  ...props
}) {
  const domref = useRef(null);

  function handleUpEvent(event) {
    event.preventDefault();
    const ele = createRipple({ event, rippleClassName });
    if (ele) domref.current.appendChild(ele);
    //domref.current.parentNode.focus();
  }


  function handleKeyUp(event) {
    handleUpEvent(event);
    typeof(props.onKeyUp) === 'function' && props.onKeyUp();
  }

  function handleMouseUp(event) {
    handleUpEvent(event);
    typeof(props.onMouseUp) === 'function'  && props.onMouseUp();
  }

  return (
    <button
      {...props}
      className={`btn btn-${shape} ${className || `btn-${variant}`} rippleAnimation  ${
        disabled ? 'btn-disabled' : ''
      }`}
      onKeyUp={handleKeyUp}
      onMouseUp={handleMouseUp}
      disabled = {disabled}
    >
      {children}

      <div className="rippleDiv" ref={domref}></div>
    </button>
  );
}

Button.defaultProps = {
  variant: 'contained',
  className: '',
  children: '',
  rippleClassName: 'ripple-blue',
  shape: 'flat',
  disabled: false
};

Button.propTyoes = {
  variant: string,
  className: string,
  children: any,
  rippleClassName: string,
  disabled: bool,
  shape: string,
};
