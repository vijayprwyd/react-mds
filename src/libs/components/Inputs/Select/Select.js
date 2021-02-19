import { func, string } from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import './select.scss';

export function Select({
  value,
  children,
  placeHolder = '',
  onChange,
  error,
  id
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const ulRef = useRef(null);
  useEffect(() => {
    const selectedNode = ulRef.current.querySelector(`[value = "${value}"]`);
    if (selectedNode) {
      selectedNode && selectedNode.classList.add('menu-item-selected');
      ref.current.innerText = selectedNode.innerText;
      visible && selectedNode && selectedNode.focus();
    }
  }, [value, visible]);

  function hideOptions(evt) {
    if (ref.current !== evt.target) {
      setVisible(false);
      document.removeEventListener('click', hideOptions);
    }
  }

  function handleChange(event) {
    const prevSelected = ulRef.current.querySelector('menu-item-selected');
    prevSelected && prevSelected.classList.remove('menu-item-selected');
    event.target.classList.add('menu-item-selected');
    onChange(event);
  }

  function handleClick(event) {
    event.preventDefault();
    setVisible(!visible);
    document.addEventListener('click', hideOptions);
  }

  function handleSelectKeyPress(event) {
    if (event.keyCode === 9) return;
    event.preventDefault();
    if (event.keyCode === 13 || event.charCode === 13) {
      handleClick(event);
    } else if (
      event.keyCode === 38 ||
      event.keyCode === 40 ||
      event.keyCode === 32
    ) {
      setVisible(true);
    }
  }

  function handleUlKeyDown(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      hideOptions(event);
      setVisible(false);
      handleChange(event);
      ref.current.focus();
    }

    if (event.charCode === 13) {
      handleChange(event);
    } else if (event.keyCode === 38) {
      (
        event.target.previousSibling || event.target.parentNode.lastChild
      ).focus();
    } else if (event.keyCode === 40) {
      (event.target.nextSibling || event.target.parentNode.firstChild).focus();
    }
  }

  function handleUlClick(evt) {
    if (evt.target.tagName !== 'UL') {
      handleChange && handleChange(evt);
    }
  }

  return (
    <div className="select-container">
      <label className={`select-label ${error ? 'select-error' : ''}`} id={id}>
        Age
      </label>

      <div
        ref={ref}
        tabIndex="0"
        onKeyDown={handleSelectKeyPress}
        onClick={handleClick}
        role="button"
        aria-haspopup="listbox"
        aria-labelledby={`${id} xyz`}
        id="xyz"
        className={
          value
            ? `selected-option ${error ? 'error-option' : ''}`
            : 'selected-option select-placeholder'
        }
      >
        {' '}
        {value ?? placeHolder}{' '}
      </div>

      {error && <div className="select-error"> Error </div>}

      <ul
        ref={ulRef}
        onKeyDown={handleUlKeyDown}
        onClick={handleUlClick}
        className={`select-options ${visible ? 'select-show' : ''}`}
        role="listbox"
      >
        {children}
      </ul>
    </div>
  );
}

Select.propTypes = {
  value: string,
  placeHolder: string,
  onChange: func,
  error: string,
  id: string.isRequired
};

Select.defaultProps = {
  value: '',
  placeHolder: '',
  onChange: () => {},
  error: ''
};
