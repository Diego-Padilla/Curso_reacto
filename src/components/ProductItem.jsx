import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import AppContext from '../context/AppContext'
const ProductItem = ({product}) => {


	const {state, addToCart} = useContext(AppContext);

	const handleClick = (item) =>{
		
		addToCart(item);
		
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
					
				</div>

				<figure onClick={()=> handleClick(product)}>
					{state.cart.includes(product) 
					? <img className='added' src={addedToCartImage} alt='added' />
					: <img className='add' src={addToCartImage} alt='addCart' />
				}
				</figure>
				
			</div>
		</div>
	);
}

export default ProductItem;
