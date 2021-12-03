import React from 'react';
import { NavLink } from 'react-router-dom';
import logoBlack from '../../img/logo-black.svg';
import Button from '../UI/Button/Button';

function Header() {
    return (
        <div>
            <header className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <a href="#!">
                            <img src={logoBlack} alt="Express logo" />
                        </a>
                    </div>
                    <nav className="header__menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                {/* <a href="/" className="menu__link">Home</a> */}
                                <NavLink to="/" className="menu__link">Home</NavLink>
                            </li>
                            <li className="menu__item">
                                {/* <a href="/about-us" className="menu__link">About us</a> */}
                                <NavLink to="/about-us" className="menu__link">About us</NavLink>
                            </li>
                            <li className="menu__item menu__item-multi">
                                <a className="menu__link">Our services</a>
                                <ul className="sub-menu__list">
                                    <li className="sub-menu__item">
                                        <a href="#!" className="sub-menu__link">Lorem ipsum</a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#!" className="sub-menu__link">Lorem ipsum</a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#!" className="sub-menu__link">Lorem ipsum</a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#!" className="sub-menu__link">Lorem ipsum</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu__item">
                                {/* <a href="/contact-us" className="menu__link">Contact us</a> */}
                                <NavLink to="/contact-us" className="menu__link">Contact us</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__burger-wrapper">
                        {/* <button className="header__btn button" href="tel: 442020202020">Call us</button> */}
                        <Button className="header__btn" href={"tel: 442020202020"}>Call us</Button>
                        <div className="burger-menu">
                            <div className="menu-icon">
                                <span></span>
                            </div>
                            <p>Menu</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
