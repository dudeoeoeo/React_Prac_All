import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <ul>
            <li>
                <Link to="/red">Red12</Link>
            </li>
            <li>
                <Link to="/blue">Blue12</Link>
            </li>
            <li>
                <Link to="/users">Users1212</Link>
            </li>
        </ul>
    );
};

export default Menu;