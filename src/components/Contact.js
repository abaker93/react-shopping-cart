import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
    return (
        <div className="contact">
            <Header />
            <h1>Contact Us!</h1>
            <p>123 Address St</p>
            <p>City, ST, ZIP</p>
            <p>555-555-5555</p>
            <p>info@website.com</p>
            <Footer />
        </div>
    )
}

export default Contact;