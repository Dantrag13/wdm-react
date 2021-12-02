import React from 'react';
import logoBlue from '../../img/logo-blue.svg';
import dmca from '../../img/dmca-logo.svg';

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer__container">
                    <div className="footer__inner-wrapper">
                        <div className="footer__first-col">
                            <div className="footer__logo">
                                <a href="#!"><img src={logoBlue} alt="Express logo blue" /></a>
                                <p>All Rights Reserved to info.com</p>
                                <p>© DDD – Web Marketing</p>
                                <p>Privacy Policy</p>
                                <div>
                                    <img src={dmca} alt="DMCA logo" />
                                </div>
                            </div>
                        </div>
                        <div className="footer__second-col">
                            <h3>contact us</h3>
                            <div>
                                <span>uk</span> <a href="tel: 442020202020">+44-2020202020</a>
                                <a href="tel: 442020202020">+44-2020202020</a>
                            </div>
                            <div>
                                <span>aut</span> <a href="tel: 442020202020">+44-2020202020</a>
                            </div>
                            <div>
                                <span>aus</span> <a href="tel: 442020202020">+44-2020202020</a>
                            </div>
                        </div>
                        <div className="footer__third-col">
                            <div className="third-col__wrapper1">
                                <h3>address</h3>
                                <p className="footer__adress">Lorem ipsum set amet</p>
                            </div>
                            <div className="third-col__wrapper2">
                                <h3>our office hours</h3>
                                <p className="footer__work-hours">Mon-Fr: 8:00-18:00 GMT Sat/Su: Closed</p>
                            </div>
                        </div>
                        <div className="footer__fourth-col">
                            <h3>email us</h3>
                            <a href="#!">info@info.com</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
