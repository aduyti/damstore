import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className="header">
            <a href="#home"><img src={Logo} alt="" /></a>
            <div className="nav-links">
                <a href="#order">Order</a>
                <a href="#order-review">Order Review</a>
                <a href="#inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;