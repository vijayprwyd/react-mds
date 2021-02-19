import React from 'react';
import { InputField } from './InputField';
import { PasswordField } from './PasswordField';
import './textfield.scss';

export function TextField(props) {
  if (props.type === 'password') return <PasswordField {...props} type="password" />;
  return <InputField {...props} />;
}
