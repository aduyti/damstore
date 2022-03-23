import React from 'react';

const Product = ({ product, clickHandler }) => {
    return (
        <div>
            {product.name}<button onClick={() => clickHandler(product.id)}>add</button>
        </div>
    );
};

export default Product;