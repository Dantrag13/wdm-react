import React from 'react';
import './Input.module.css';


export default function Input({type, name, placeholder, onChange, children, ...props}) {
    return (
        <div className="form-item">
            <input className="form-item__input" type={type} name={name} onChange={onChange} {...props} />
            <label for="firstname">
                {placeholder}
            </label>
        </div>
    )
}