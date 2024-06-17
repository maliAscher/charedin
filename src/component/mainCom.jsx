import React from 'react'
import Demo2Contact from './default3'
import './styles.css'
import { Routes, Route, Link } from 'react-router-dom'
import Users from './defautl1'
import Demo2_ProductDetails from './default2'


export default function MainCom() {
    return (
        <div>

            <div>
                <nav className="navbar">
                    <div className="navbar__container">
                        <Link to="/" id="navbar__logo"><i className="fas fa-palette"> CharedIn</i></Link>
                        <div className="navbar__toggle" id="mobile-menu">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <ul className="navbar__menu">
                            <li className="navbar__item">
                                <Link to="/" className="navbar__links">Home</Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/tech" className="navbar__links">Tech</Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/products" className="navbar__links">Products</Link>
                            </li>
                            <li className="navbar__btn">
                                <Link to="/signup" className="button">Sign Up</Link>
                            </li>
                            {/* <li className="find_people">
                                <Link to="/findPeople" className="button">find people</Link>
                            </li> */}
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="/tech" element={<Demo2Contact />} />
                    <Route path="/products" element={<Users />} />
                    <Route path="/signup" element={<Demo2_ProductDetails />} />
                   
                </Routes>
            </div>




            <div class="footer__container">
                <div class="footer__links">
                    <div class="footer__link--wrapper">
                        <div class="footer__link--items">
                            <h2>About us</h2>
                            <a href="/"> How it works</a>
                            <a href="/"> Testimonies</a>
                            <a href="/"> Careers</a>
                            <a href="/"> Investments </a>
                            <a href="/"> Terms of Service</a>

                        </div>
                        <div class="footer__link--items">
                            <h2>About us</h2>
                            <a href="/"> How it works</a>
                            <a href="/"> Testimonies</a>
                            <a href="/"> Careers</a>
                            <a href="/"> Investments </a>
                            <a href="/"> Terms of Service</a>

                        </div>
                    </div>
                    <div class="footer__link--wrapper">
                        <div class="footer__link--items">
                            <h2>About us</h2>
                            <a href="/"> How it works</a>
                            <a href="/"> Testimonies</a>
                            <a href="/"> Careers</a>
                            <a href="/"> Investments </a>
                            <a href="/"> Terms of Service</a>

                        </div>
                        <div class="footer__link--items">
                            <h2>About us</h2>
                            <a href="/"> How it works</a>
                            <a href="/"> Testimonies</a>
                            <a href="/"> Careers</a>
                            <a href="/"> Investments </a>
                            <a href="/"> Terms of Service</a>

                        </div>
                    </div>
                </div>
                <div class="social__media">
                    <div class="social__media--wrap">
                        <div class="footer__logo">
                            <a href="/" id="footer__logo"><i class="fas fa-gem"></i>NEXT</a>
                        </div>
                        <p class="website__rights"> NEXT 2020. All rights reserved</p>
                        <div class="social__icons">
                            <a href="" class="social__icon--link" target="_blank">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="" class="social__icon--link" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="" class="social__icon--link" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
