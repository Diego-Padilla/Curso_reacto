import React from 'react'
import '@styles/Header.scss';
import logo from "@logos/logo_yard_sale.svg";

const Mobile_Menu = () => {
    return (
        <div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo"  />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furniture</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
    )
}

export default Mobile_Menu
