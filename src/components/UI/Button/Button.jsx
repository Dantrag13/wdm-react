import React from 'react';
import styles from './Button.module.css';

export default function Button({ className, href, children, ...props }) {
  return (
    <button 
      className={[styles.button, className].join(' ')}
      href={href}
      {...props}
    >
        {children}
    </button>
  )
}
