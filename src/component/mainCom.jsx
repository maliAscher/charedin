import React from 'react'
import Demo2Contact from './default3'
import './styles.css'
import { Routes, Route, Link } from 'react-router-dom'
import Users from './Users'
import Login from './login'
import Profile from './Profile'
import HomePage from './HomePage'
import Demo2_ProductDetails from './default2'
import Profile  from './Profile'

export default function MainCom() {
    return (
        <div>
            <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
      integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
        <div>
        <nav className="navbar">
    <div className="navbar__container">
    
        <ul className="navbar__menu">
        <li className="navbar__btn">
                <Link to="/profile" className="button">פרופיל</Link>
            </li>
            
            <li className="navbar__item">
                <Link to="/tech" className="navbar__links">פורומים</Link>
            </li>
            <li className="navbar__item">
                <Link to="/users" className="navbar__links">חיפוש</Link>
            </li>
            <li className="navbar__item">
                <Link to="/" className="navbar__links">בית</Link>
            </li>
            
        </ul>
        <Link to="/" id="navbar__logo"> <b>CharedIn</b>   <i className="fas fa-laptop"></i></Link>
        <div className="navbar__toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </div>
</nav>

            <Routes>

                <Route path="/tech" element={<Demo2Contact />} />
                <Route path="/" element={<Demo2Contact />} />
                <Route path="/users" element={<Users />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/start" element={<HomePage />} />
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
                   

                </div>
                <div class="footer__link--items">
                    <h2>About us</h2>
                    <a href="/"> How it works</a>
                    <a href="/"> Testimonies</a>
                    <a href="/"> Careers</a>
                    
                </div>
            </div>
            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2>About us</h2>
                    <a href="/"> How it works</a>
                    <a href="/"> Testimonies</a>
                    <a href="/"> Careers</a>
                    

                </div>
                <div class="footer__link--items">
                    <h2>About us</h2>
                    
                    <a href="/"> Careers</a>
                    <a href="/"> Investments </a>
                    <a href="/"> Terms of Service</a>

                </div>
            </div>
        </div>
        <div class="social__media">
            <div class="social__media--wrap">
                <div class="footer__logo">
                    <a href="/" id="footer__logo"><i className="fas fa-laptop"> CharedIn</i></a>
                </div>
                <p class="website__rights"> CharedIn 2024. All rights reserved</p>
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
