import React, { useState } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { InputField } from './InputField';
import './textfield.scss';

export function PasswordField({ className, ...rest }) {
  function handleChange() {
    setType(type === 'password' ? 'text' : 'password');
  }

  const [type, setType] = useState('password');

  return (
   <>
   <div className={`textfield-container ${className}`}>
      <InputField {...rest} type={type} />
      <Checkbox style = {{marginLeft: "-14px", marginTop: "10px"}}name = "password" onChange = {handleChange}> Show password </Checkbox>
    </div>
</>
  );
}
