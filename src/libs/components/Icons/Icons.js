import React from 'react';
import { MATERIAL_ICONS } from './iconConstants';

function MaterialIcons({ name, className }) {
  return <span className= {`material-icons ${className}`} >{MATERIAL_ICONS[name]}</span>;
}

export default function Icons({ name, className }) {
  return <MaterialIcons className = {className} name={name}  />;
};