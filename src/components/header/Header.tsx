import React from 'react';

import style from "./style.module.scss"
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';

const {header, inner, logo} = style



const Header = () => {
    return (
        <header className={header}>
            <div className={inner}>
                <Link className={logo} to="/">
                    <img src="/image/logo.svg" alt="" />
                </Link>
                <Nav/>
            </div>
        </header>
    );
}

export default Header;
