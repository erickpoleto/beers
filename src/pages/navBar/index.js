import React from 'react';
import {FaBars, FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';

import './styles.css';

export default function NavBar() {

    const showHiddenBar = () => {
        const main = document.querySelector("main");
        main.classList.toggle('main');
        
    }

    return (
        <div className="nav-bar-container">
            <nav className="nav-bar">
                <button onClick={showHiddenBar}>
                    <FaBars size={25} color="black"></FaBars>
                </button>
                <strong><Link style={{textDecoration:'none', color:'black'}} to='/'>BeerS</Link></strong>
                <span>
                    <FaSearch size={25} color="black">
                    </FaSearch>
                </span>
            </nav>
            <main className="main:disabled">
                <ul>
                    <li><strong>Login</strong></li>
                    <li><strong>Comunity</strong></li>
                    <li><strong>Contact Us</strong></li>
                </ul>
            </main>
        </div>
    );
}
