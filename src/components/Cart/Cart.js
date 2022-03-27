import React from 'react';
import './Cart.css'

const Cart = ({ cartItems }) => {
    let items = 0;
    console.log(cartItems)
    // for (const item in cartItems) {
    //     items += item.quantity;
    // }
    return (
        <div className="cart">
            Item Selected: {items}
        </div>
    );
};

export default Cart;