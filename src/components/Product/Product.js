import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, seller, price,stock } = props.product

    return (
        <div className='product'>

           <div>
           <img src={img} alt="" />
           </div>

            <div>
            <h3>{name}</h3><br />
            <p>By: {seller} </p>
            <p>Price: {price}</p>
            <p>Available only {stock} </p>
            <button className='add-btn' onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartShopping} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;