import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="links">
                    <div>
                        <h3>Shout Out</h3>
                        <p>Thanks to the ladies at Brimful for the imagery that appears in this demo. Head on over to their site to shop these products for real.</p>
                    </div>
                    <div>
                        <h3>Information</h3>
                        <ul>
                            <li>FAQ</li>
                            <li>Shipping & Returns</li>
                            <li>Terms & Conditions</li>
                            <li>Impact Program</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Navigate</h3>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
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
                </div>
                <div className="copyright">
                    <p>&copy; 2020 <a href="http://annabaker.design" target="_blank" rel="noreferrer">Anna Baker Design</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;