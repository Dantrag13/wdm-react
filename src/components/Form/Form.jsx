import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

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

    return (
        <div>
            <section className="form">
                <div className="form__container">
                    <h2 className="form__title">Contact <span>Us</span></h2>
                    <form onSubmit={onFormSubmit}>
                        <div className="form__inner">
                            <Input type="text" name="firstName" id="firstName" onChange={onInputChange} />
                            {/* <div className="form-item">
                                <input type="text" name="firstName" id="firstname" autocomplete="off" required onChange={onInputChange} />
                                <label for="firstname">First Name</label>
                            </div> */}
                            <Input type="text" name="lastName" id="lastName" onChange={onInputChange} />
                            {/* <div className="form-item">
                                <input type="text" name="lastName" id="lastname" autocomplete="off" required onChange={onInputChange} />
                                <label for="lastname">Last Name</label>
                            </div> */}
                            <div className="form-item">
                                <select type="text" id="phone" autocomplete="off" />
                                <label for="phone">+1</label>
                            </div>
                            <Input type="text" name="email" id="email" onChange={onInputChange} />
                            {/* <div className="form-item">
                                <input type="text" name="email" id="email" autocomplete="off" required onChange={onInputChange} />
                                <label for="email">Enter email</label>
                            </div> */}
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
