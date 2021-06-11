import react, { useContext, useState } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';


function Cart({ cart, removeFromCart }) {

    const [price, setPrice] = useState(0);

    // const [cart, setCart] = useContext(CartContext);
    console.log(cart);

    const [cartProduct, setCartProduct] = useState([]);

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price.current.value, 0);

    return (
        <div className="body" style={{  }}>
            <div className="items">
                <div className="cards">
                    {cart &&
                        cart.map((product) => (
                            <div className="item__info" key={product.id}>

                                <img
                                    src="https://secureservercdn.net/160.153.137.99/6z6.eb8.myftpupload.com/wp-content/uploads/2021/03/img_4861.jpeg?time=1623395444"
                                    style={{ width: '100%', height: '50%', }}
                                    alt="not found"></img>
                                <p>
                                    {" "}
                                    <strong>Product Name:</strong> {product.name}
                                </p>
                                <p>
                                    <strong>Price $: </strong>
                                    {product.price.current.value}
                                </p>

                                <div className="cards__button">
                                    <button onClick={() => removeFromCart(product)}>Remove</button>
                                    {/* <button >Checkout</button> */}
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className='cart__total' style={{ margin:'20px', padding:'20px',color:'gray' }}>
                <h5>🛒 Total Price $ : {totalPrice}</h5>
            </div>

        </div>
    )
}

export default Cart;