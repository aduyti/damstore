import React from 'react';
import './Cart.css'

const Cart = ({ cartItems }) => {
    const count = () => {
        let items = 0;
        for (const item of cartItems) {
            items += item.quantity;
        }
        return items;
    }
    const totalPrice = () => {
        let price = 0;
        for (const item of cartItems) {
            price += item.quantity * item.price;
        }
        return price;
    }
    return (
        <div className="cart">
            <p>Item Selected: {count()}</p>
            <p>Total price: {totalPrice()}</p>
        </div>
    );
};

export default Cart;