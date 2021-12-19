import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder'
import menu_logo from '@icons/icon_menu.svg';
import logo from "@logos/logo_yard_sale.svg";
import AppContext from '../context/AppContext';
import Mobile_Menu from '@components/Mobile_Menu';
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
	const {state,toggleOrder,toggleMenu } = useContext(AppContext);
	
	return (
		<nav>
			<img src={menu_logo} alt="menu" className="menu" onClick={()=>toggleMenu()} />
			<div>
			<Mobile_Menu/>
			</div>

			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={()=>toggleMenu()}>platzi@example.com 🔽
					</li>
					<li className="navbar-shopping-cart" 
					onClick={()=>toggleOrder()}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
					</li>
				</ul>
			</div>
			{state.menuIsOpen && <Menu/>}
			{state.orderIsOpen && <MyOrder/>}
		</nav>
	);
}

export default Header;
