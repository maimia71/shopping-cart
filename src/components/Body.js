import React, { useEffect, useState, useContext } from "react";
import "./Body.css";
import { CartContext } from "./CartContext";

function Body({ products, addToCart }) {


    function notify(product) {
        var ProductInfo =
            `Name : ${product.name}\nPrice : ${product.price.current.text}\nBrand Name : ${product.brandName}\nCode : ${product.productCode}`;
        alert(ProductInfo);
    }


 
    return (
        <div className="body">
            <div className="items">
                <div className="cards">
                    {products &&
                        products.map((product) => (
                            <div className="item__info" key={product.id}>

                                <img
                                    // src={product.imageUrl}
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
                                    <button onClick={() => addToCart(product)}>Add to cart</button>

                                    <button onClick={() => notify(product)}>Buy Now</button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Body;
