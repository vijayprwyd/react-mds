import React, { useState, useRef } from 'react';
import { ICONS } from '../../Icons/iconConstants';
import Icons from '../../Icons/Icons';
import { Button } from '../Button/Button';
import './textfield.scss';

export function TextField({
  className,
  error,
  textFieldId,
  label,
  type = 'text',
  ...rest
}) {

  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

 function focusTextField() {
    setFocused(true);
 }

 function blurTextField() {
     focused && setFocused(false);
 }

  return (
    <div className={`textfield-container ${className}`}>
      <label
        htmlFor={textFieldId}
        className={`text-label ${focused ? 'label-focused' : ''} ${
          !focused && (!ref.current || ref.current.value === '')
            ? 'label-blurred'
            : ''
        }`}
      >
        {label}
      </label>
      <input
        {...rest}
        id={textFieldId}
        onFocus={focusTextField}
        className={`text-input ${error ? 'input-error' : ''}`}
        type={type}
        ref={ref}
        onBlur={() => setFocused(false)}
      />
      <Button onClick = {focusTextField} shape = 'circular' variant = 'text' className = 'tf-button'>
      <Icons name = {ICONS.EYES}/>

      </Button>
    </div>
  );
}
