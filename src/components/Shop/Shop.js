import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    const handleAddProduct = (product) => {
        const newCart = [...cart,product];
        setCart(newCart)
        console.log(cart);
    }

    return (
        <div className='shop-container'>

            <div className="product-container">
                {/* <h1>all products: {products.length}</h1> */}
                {
                    products.map(product => <Product key={product.key} product={product} handleAddProduct={handleAddProduct} >

                    </Product>)
                }
            </div>

            <div className="order-summery">

                <Cart cart={cart}></Cart>
            </div>


        </div>
    );
};

export default Shop;