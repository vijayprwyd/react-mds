import React, { useState } from 'react';
import './slider.scss';

export function Slider({ min, max, initialValue = 20, id, ariaValueText, label, onChange }) {
  const [value, setValue] = useState(initialValue);
  function handleChange(event) {
    setValue(event.target.value);
    typeof(onChange) === 'function' && onChange(event);
  }

  return (
    <div className="range-input-container">
      <div>
        <label className="range-input-label" htmlFor={id}>
          { label }
        </label>

        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step = {1}
          className="range-input"
          onChange={handleChange}
          value={value}
          style={{
            backgroundImage: `linear-gradient(to right, #3f51b5 ${
              (value * 100) / max
            }%, #c7cbe9 ${(value * 100) / max}%)`
          }}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={ariaValueText || value}
        ></input>
      </div>
      <div className="range-input-value"> {value} </div>
    </div>
  );
}