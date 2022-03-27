import React, { useEffect, useState } from 'react';
import { addToDb, getDbData } from '../../fakeData/fakeDB.js';
import Product from '../Product/Product.js';
import Cart from '../Cart/Cart.js';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getDbData();
        if (storedCart && products.length) {
            let newCart = [];
            for (const id in storedCart) {
                const item = products.find(p => p.id === id);
                item.quantity = storedCart[id];
                newCart.push(item);
            }
            setCartItems([...newCart]);
        }
    }, [products])
    const handelClick = id => {
        let newCart = [...cartItems];
        if (addToDb(id)) {
            const item = products.find(p => p.id === id);
            item.quantity = 1;
            newCart.push(item);
        }
        else {
            newCart.forEach(item => {
                if (item.id === id) item.quantity += 1;
            });
        }
        setCartItems([...newCart]);
    }
    return (
        <div className="shop">
            <div className="products">
                {
                    products.map(product => <Product product={product} key={product.id} clickHandler={handelClick} />)
                }
            </div>
            <Cart cartItems={cartItems} />
        </div>
    );
};

export default Shop;