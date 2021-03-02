import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, wholePrice,stock} = props.product;
    return (
        <div className="product">
            <div className="product-child1">
                <img src={img} alt=""/>
            </div>
            <div className="product-child2">
                <h4>{name}</h4> 
                <p><small>By: {seller}</small></p>  
                <p>In stock: {stock}</p>
                <h4>Price: ${wholePrice}</h4>

                <button className='addBtn' 
                    onClick={() => props.handelAddProduct(props.product)}>
                     <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;