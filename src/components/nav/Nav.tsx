import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss'

import { headerNavRoutes } from '../../routes/routes';

const {nav, ul, li, link} = style

const Nav = () => {
    return (
        <nav className={nav} >
            <ul className={ul}>
                {headerNavRoutes.map(({path, text}) => <li className={li} key={text} >
                    <Link className={link} to={path}>{text}</Link>
                </li>  )}
            </ul>
        </nav>
    );
}

export default Nav;
