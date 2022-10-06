import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <NavLink to="/home" className={({ isActive }) =>
                isActive ? "text-blue-600 text-2xl p-5 font-bold" : "text-2xl p-5 font-bold"
            } >Home</NavLink>
            <NavLink to="/restaurant" className={({ isActive }) =>
                isActive ? "text-blue-600 text-2xl p-5 font-bold" : "text-2xl p-5 font-bold"
            }>Restaurant</NavLink>
            <NavLink to="/about" className={({ isActive }) =>
                isActive ? "text-blue-600 text-2xl p-5 font-bold" : "text-2xl p-5 font-bold"
            }>About</NavLink>

        </div>
    );
};

export default Header;