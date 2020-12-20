import React from 'react';
import logo from '../img/octoon-logo.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="Octoon" />
            <ul className="menu">
                <li><a href="./">Home</a></li>
                <li><a href="./shop">Shop</a></li>
                <li><a href="./about">About</a></li>
                <li><a href="./contact">Contact</a></li>
                <li>
                    <a href="./cart">
                        Cart
                        <span className="cart-number">0</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header;