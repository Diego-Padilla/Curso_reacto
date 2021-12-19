import React,{useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext'
import '@styles/MyOrder.scss';
import arrow from "@icons/flechita.svg";
import { useState } from 'react/cjs/react.development';



const MyOrder = () => {
	const {state} = useContext(AppContext);
	const sumTotal = ()=>{
		const reducer  = (accumulator , currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);	
		return sum
	}


	
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img className='clickAble-area' src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div>

			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem product={product} key={`orderItem-${product.id}-${index}`} />
					))}
					
			</div>
		</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>	
				</div>
				<button className="primary-button">
					Checkout
				</button>
		</aside>
	);
}

export default MyOrder;
