import React from 'react';
import css from './Button.module.css';

export default function Button({ children, ...props }) {

  // let btnClasses = className


  return (
    <button {...props} className={css.button}>
      {children}
    </button>
  )
}
