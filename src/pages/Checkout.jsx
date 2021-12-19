import React, {useContext, useState} from 'react';
import OrderItem from '@components/OrderItem';
import Menu from '@components/Menu';
import AppContext from '../context/AppContext';
import '@styles/Checkout.scss';
import MyOrder from '@containers/MyOrder';

const Checkout = () => {
	const {state} = useContext(AppContext);
	const sumTotal = ()=>{
		const reducer  = (accumulator , currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);	
		return sum
	}

	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My Order</h1>
				<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem product={product} key={`orderItem-${product.id}-${index}`} />
					))}
				
					
				</div>
				
			</div>
		</div>
	);
}

export default Checkout;
