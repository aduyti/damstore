import React, { useEffect, useState } from 'react';
import { addToDb } from '../../fakeData/fakeDB.js';
import Product from '../Product/Product.js';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handelClick = id => addToDb(id);

    return (
        <div>
            {
                products.map(product => <Product product={product} key={product.id} clickHandler={handelClick} />)
            }
        </div>
    );
};

export default Products;