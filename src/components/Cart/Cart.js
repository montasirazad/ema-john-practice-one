import React from 'react';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
         
    }

 


    return (
        <div>
             <h1>Order review</h1>
             <h3>Items added : {cart.length}</h3>
             {
                 cart.map((item,idx)=> <li type={1} key={idx}> {item.name} --- Price :{item.price} </li>)
             }
             <p>price: {total}</p>
        </div>
    );
};

export default Cart;