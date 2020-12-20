import React from 'react';
import logo from '../img/octoon-logo.svg';
import basket from '../img/basket.svg';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="Octoon" />
            <ul className="menu">
                <li><a href="./">Home</a></li>
                <li><a href="./shop">Shop</a></li>
                <li><a href="./about">About</a></li>
                <li><a href="./contact">Contact</a></li>
                <li className="cart">
                    <a href="./cart">
                        <img src={basket} alt="cart" />
                        <span className="cart-number">0</span>
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;