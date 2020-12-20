import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h3>Shout Out</h3>
                <p>Thanks to the ladies at Brimful for the imagery that appears in this demo. Head on over to their site to shop these products for real.</p>
            </div>
            <div>
                <h3>Information</h3>
                <ul>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Shipping & Returns</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Impact Program</a></li>
                </ul>
            </div>
            <div>
                <h3>Navigate</h3>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3>Follow Us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Pinterest</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className="copyright">
                <p>&copy; 2020 <a href="http://annabaker.design" target="_blank" rel="noreferrer">Anna Baker Design</a></p>
            </div>
        </div>
    )
}

export default Footer;