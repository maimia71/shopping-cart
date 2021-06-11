import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    return (
        // anything you pass here
        // will be available for every component
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}

// export default CartContext
// export default CartProvider;