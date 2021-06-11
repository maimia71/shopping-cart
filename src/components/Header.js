import React from 'react';
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Cart from './Cart';

function Header({ cart, changePage }) {
    return (
        <div className='header'>

            <div className='header__left' style={{border:''}}>
                <h1>JustBuy 🎯 </h1>
                <button onClick={() => changePage('products')}>Products</button>
            </div>

            <div className='header__right' style={{ fontSize: 'large',border:'' }}>
                <button onClick={() => changePage('carts')}>Product in Cart
                    <ShoppingCartIcon /> {cart.length}
                </button>
               
            </div>

        </div>
    );
}

export default Header