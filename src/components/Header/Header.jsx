import React from 'react';
import logoBlack from '../../img/logo-black.svg';

function Header() {
    return (
        <div>
            <header class="header">
                <div class="header__container">
                <div class="header__logo">
                    <a href="#!">
                        <img src={logoBlack} alt="Express logo" />
                    </a>
                </div>
                <nav class="header__menu">
                    <ul class="menu__list">
                        <li class="menu__item">
                            <a href="#!" class="menu__link">Home</a>
                        </li>
                        <li class="menu__item">
                            <a href="#!" class="menu__link">About us</a>
                        </li>
                        <li class="menu__item menu__item-multi">
                            <a href="#!" class="menu__link">Our services</a>
                            <ul class="sub-menu__list">
                                <li class="sub-menu__item">
                                    <a href="#!" class="sub-menu__link">Lorem ipsum</a>
                                </li>
                                <li class="sub-menu__item">
                                    <a href="#!" class="sub-menu__link">Lorem ipsum</a>
                                </li>
                                <li class="sub-menu__item">
                                    <a href="#!" class="sub-menu__link">Lorem ipsum</a>
                                </li>
                                <li class="sub-menu__item">
                                    <a href="#!" class="sub-menu__link">Lorem ipsum</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu__item">
                            <a href="#!" class="menu__link">Contact us</a>
                        </li>
                    </ul>
                </nav>
                <div class="header__burger-wrapper">
                    <button class="header__btn button" href="tel: 442020202020">Call us</button>
                    <div class="burger-menu">
                        <div class="menu-icon">
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