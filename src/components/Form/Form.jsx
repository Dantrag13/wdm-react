import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

export default function Form() {
    const [formData, setFormData] = useState({});
    
    const onInputChange = (e) => {
        const {name, value } = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log('Sending JSON...', formData);
    }

    const onPhoneNumberChange = (isValid, value, data) => {
        console.log('=>', isValid, value, data);
        setFormData((prevState) => ({...prevState, phone: value}));
    }

    return (
        <div>
            <section className="form">
                <div className="form__container">
                    <h2 className="form__title">Contact <span>Us</span></h2>
                    <form onSubmit={onFormSubmit}>
                        <div className="form__inner">
                            <Input type="text" name="firstName" placeholder="First Name" onChange={onInputChange} required />
                            <Input type="text" name="lastName" placeholder="Last Name" onChange={onInputChange} required />
                            <IntlTelInput
                                fieldName="phone"
                                containerClassName="intl-tel-input"
                                inputClassName="form-control"
                                onPhoneNumberChange={onPhoneNumberChange}
                            />
                            <Input type="text" name="email" placeholder="Email" onChange={onInputChange} required />
                            <div className="form-item">
                                <textarea type="text" name="description" id="textarea" name="textarea" autocomplete="off" required onChange={onInputChange} />
                                <label for="textarea">Tell Us What Happened</label>
                            </div>
                            <Button className="form__btn">Send</Button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
