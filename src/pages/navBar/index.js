import React from 'react';
import {FaBars, FaSearch} from 'react-icons/fa'

import './styles.css';

export default function NavBar() {

    const showHidden = () => {
        const main = document.querySelector("main");
        main.classList.toggle('main');
        
    }
    return (
        <div className="nav-bar-container">
            <nav className="nav-bar">
                <button onClick={showHidden}>
                    <FaBars size={25} color="black"></FaBars>
                </button>
                <strong>BeerS</strong>
                <span>
                    <FaSearch size={25} color="black"></FaSearch>
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
