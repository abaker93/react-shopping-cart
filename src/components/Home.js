import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import barleyBunny from '../img/barleyBunny.webp';
import stripedGrayWolf from '../img/stripedGrayWolf.webp';
import reginaldFox from '../img/reginaldFox.webp';
import pedroRam from '../img/pedroRam.webp';
import nicholasBearCub from '../img/nicholasBearCub.webp';

const Home = () => {
    const [products] = useState([
        {
            img: stripedGrayWolf,
            title: 'Striped Gray Wolf',
            price: 58.00
        },
        {
            img: reginaldFox,
            title: 'Reginald Fox',
            price: 50.00
        },
        {
            img: pedroRam,
            title: 'Pedro Ram',
            price: 35.00
        },
        {
            img: nicholasBearCub,
            title: 'Nicholas Bear Cub',
            price: 50.00
        }
    ])

    return (
        <div className="home">
            <Header />
            <div className="hero">
                <div>
                    <img src={barleyBunny} alt="barley bunny" />
                </div>
                <div>
                    <h1>Whimsical Toys</h1>
                    <p>Our carefully curated collections of handcrafted toys spark joy and imagination. Perfect for creative kiddos.</p>
                    <button type="button">Shop Now</button>
                </div>
                
            </div>
            <div className="about">
                <div>
                    <h2>Shop, Play, Love</h2>
                    <p>This online boutique was created from our passion for unique toys, decor, and books for babies. We strive to provide the most timeless well-crafted items that we believe will enrich your parenting experience and bring endless joy to your little ones.</p>
                    <button type="button">About</button>
                </div>
            </div>
            <div className="shop">
                <span className="subheader">New at Octoon</span>
                <h2>The Bright & Bold Collection</h2>
                <button type="button">Shop Now</button>
                {products.map(e => {
                    return (
                        <div className="card">
                            <img src={e.img} alt={e.title} />
                            <p>{e.title}</p>
                            <p>${e.price.toFixed(2)}</p>
                        </div>
                    )
                })}
            </div>
            <div className="newsletter">
                <h2>Newsletter</h2>
                <p>Sign up to get 15% off your first order!</p>
                <form>
                    <input type="email" placeholder="Email address" />
                    <button type="button">Sign Up</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Home;