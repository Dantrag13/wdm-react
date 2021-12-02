import React from 'react'

export default function Form() {
    return (
        <div>
            <section className="form">
                <div className="form__container">
                    <h2 className="form__title">Contact <span>Us</span></h2>
                    <form action="">
                        <div className="form__inner">
                            <div className="form-item">
                                <input type="text" id="firstname" autocomplete="off" required />
                                <label for="firstname">First Name</label>
                            </div>
                            <div className="form-item">
                                <input type="text" id="lastname" autocomplete="off" required />
                                <label for="lastname">Last Name</label>
                            </div>
                            <div className="form-item">
                                <select type="text" id="phone" autocomplete="off" required></select>
                                <label for="phone">+1</label>
                            </div>
                            <div className="form-item">
                                <input type="text" id="email" autocomplete="off" required />
                                <label for="password">Enter email</label>
                            </div>
                            <div className="form-item">
                                <textarea type="text" id="textarea" name="textarea" autocomplete="off" required></textarea>
                                <label for="textarea">Tell Us What Happened</label>
                            </div>
                            <button href="#!" className="form__btn button" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
