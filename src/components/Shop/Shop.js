import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const shopingData = fakeData.slice(0,80);
    const [products, setProducts] = useState(shopingData);
    const [cart, setCart] = useState([])

    
    const handelAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        handelAddProduct={handelAddProduct}
                        product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;