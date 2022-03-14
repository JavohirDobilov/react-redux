import React from 'react'
import { Link } from 'react-router-dom'
import "../header/header.css"
import Cart from "../cart_icon/Cart_bloc"

const Header = () => {
    return (
        <div className='navbar_navb'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='header'>
                        <Link to="/" className='header__store-title'>OnlineShop</Link>
                    </div>
                    <div className='wrapper header__cart-btn-wrapper'>
                        <Link to="/add"><Cart /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header