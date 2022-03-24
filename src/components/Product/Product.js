import React from 'react';
import './Product.css'

const Product = ({ product, clickHandler }) => {
    const { id, name, img, price, seller, ratings } = product;
    return (
        <div className="product-card">
            <img className="card-img" src={img} alt={name} />
            <div className="card-info">
                <h3 style={{ fontSize: '21px' }} className="card-text text-black">{name}</h3>
                <h5 style={{ fontSize: '17px' }} className="card-text text-black">Price: ${price}</h5>
            </div>
            <div className="card-bottom">

                <p className="card-info card-text text-gray">Manufacturer: {seller}</p>
                <p className="card-info card-text text-gray">Rating: {ratings}</p>
                <button className="card-btn" onClick={() => clickHandler(id)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;