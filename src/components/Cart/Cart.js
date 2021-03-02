import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping =0;
    if(total < 20){
        shipping = 0
    }
    else if (total > 20){
        shipping = 5
    }else if(total >  100){
        shipping = 10
    }

    let tax = Math.round(total / 10);

    return (
        <div className="cart-container">
            <h1> Order Summery</h1>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Product price: ${total}</p>
            <p>shipping cost: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>total price: ${total + shipping + tax}</p>
            <button>cart review</button>
        </div>
    );
};

export default Cart;