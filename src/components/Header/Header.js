import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className="header">
            <div><a href="#home"><img src={Logo} alt="" /></a></div>
            <div>
                <a href="#order">Order</a>
                <a href="#order-review">Order Review</a>
                <a href="#inventory">Manage Inventory</a>
            </div>
        </div>
    );
};

export default Header;