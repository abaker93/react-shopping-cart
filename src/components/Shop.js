import React from 'react';
import { useState } from 'react'
import Header from './Header';

import stripedGrayWolf from '../img/stripedGrayWolf.webp'
import reginaldFox from '../img/reginaldFox.webp'
import pedroRam from '../img/pedroRam.webp'
import nicholasBearCub from '../img/nicholasBearCub.webp'
import littleChickie from '../img/littleChickie.webp'
import laraBear from '../img/laraBear.webp'
import gwendolynRaccoon from '../img/gwendolynRaccoon.webp'
import gnomeWithYellowHat from '../img/gnomeWithYellowHat.webp'
import camilaSheep from '../img/camilaSheep.webp'
import blackWhiteGoose from '../img/blackWhiteGoose.webp'
import barleyBunny from '../img/barleyBunny.webp'

const Shop = () => {
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
		},
		{
			img: littleChickie,
			title: 'Little Chickie',
			price: 32.00
		},
		{
			img: laraBear,
			title: 'Lara Bear',
			price: 34.00
		},
		{
			img: gwendolynRaccoon,
			title: 'Gwendolyn Raccoon',
			price: 45.00
		},
		{
			img: gnomeWithYellowHat,
			title: 'Gnome with Yellow Hat',
			price: 32.00
		},
		{
			img: camilaSheep,
			title: 'Camila Sheep',
			price: 35.00
		},
		{
			img: blackWhiteGoose,
			title: 'Black + White Goose',
			price: 50.00
		},
		{
			img: barleyBunny,
			title: 'Barley Bunny',
			price: 38.00
		}
	])

	return (
		<div>
			<Header />
			<h1>Stuffed Animals</h1>
			{products.map(e => {
				return (
					<div className="card">
						<img src={e.img} alt={e.title} />
						<p>{e.title}</p>
						<p>${e.price.toFixed(2)}</p>
						<button type="button">+</button>
						<button type="button">Add 1 to cart</button>
						<button type="button">-</button>
					</div>
				)
			})}
		</div>
	)
}

export default Shop;