import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/friends'}>Friends</Link>
            <h1>Its not going to be change</h1>
        </div>
    );
};

export default Header;