import React from 'react';
import { addToDb } from '../../fakeData/fakeDB.js';
import Product from '../Product/Product.js';


const Products = () => {
    addToDb(1);
    return (
        <div>
            <Product name="na1" />
            <Product name="n2" />
            <Product name="n3" />
            <Product name="n4" />
        </div>
    );
};

export default Products;