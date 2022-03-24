import React, { useEffect, useState } from 'react';
import { addToDb } from '../../fakeData/fakeDB.js';
import Product from '../Product/Product.js';
import Cart from '../Cart/Cart.js';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handelClick = id => addToDb(id);

    return (
        <div className="shop">
            <div>
                {
                    products.map(product => <Product product={product} key={product.id} clickHandler={handelClick} />)
                }
            </div>
            <Cart />
        </div>
    );
};

export default Shop;