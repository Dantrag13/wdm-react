import React from 'react';
// import style from './Input.module.css';
// import './Input.css';


export default function Input({type, id, name, value, onChange, children, ...props}) {
    return (
        <div className="form-item">
            <input className="form-item__input" type={type} id={id} name={name} onChange={onChange} {...props} />
            <label for="firstname">
                {children}
            </label>
        </div>
    )
}
