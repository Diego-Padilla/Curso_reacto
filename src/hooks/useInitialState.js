import { useState } from "react";

const initialState = {
    cart:[],
    orderIsOpen: false,
    menuIsOpen: false
};


const useInitialState = () => {
    const [state, setState] = useState(initialState);
    let index = 0;
    
    const addToCart = (payload) =>{
        setState({
            ...state,
             cart: state.cart.includes(payload)
             ? state.cart
            : [...state.cart, payload]
        });
    };

    const removeFromCart = (payload,key) =>{
        setState({

            ...state,
            cart: state.cart.filter(items => items.id !== payload.id),
        });
    };

    const toggleOrder = () => {
        console.log('statechange');
        setState({
            ...state,
            orderIsOpen: !state.orderIsOpen,
        });
    };

    const toggleMenu = ()=> {
        setState({
            ...state,
            menuIsOpen: !state.menuIsOpen,
            
        });
    };
    return{
        state,
        addToCart,
        removeFromCart,
        toggleMenu,
        toggleOrder,
    }
}

export default useInitialState;