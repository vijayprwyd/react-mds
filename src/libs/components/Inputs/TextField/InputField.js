import { string } from 'prop-types';
import React, { useRef, useState } from 'react';

export function InputField({
  className,
  textFieldId,
  label,
  error,
  type,
  ...rest
}) {
  function focusTextField() {
    setFocused(true);
  }

  const inputFieldRef = useRef(null);
  const [focused, setFocused] = useState(false);

  return (
    <>
      <label
        htmlFor={textFieldId}
        className={`text-label ${focused ? 'label-focused' : ''} ${
          !focused &&
          (!inputFieldRef.current || inputFieldRef.current.value === '')
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
        ref={inputFieldRef}
        onBlur={() => setFocused(false)}
      />
    </>
  );
}

InputField.propTypes = {
  className: string,
  textFieldId: string.isRequired,
  label: string.isRequired,
  error: string,
  type: string.isRequired
};

InputField.defaultProps = {
  className: '',
  error: ''
};
