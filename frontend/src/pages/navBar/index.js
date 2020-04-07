import React, {useState, Component, Fragment} from 'react';
import {FaBars, FaSearch} from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom';

import {logout} from '../../services/auth'
import './styles.css';

export default function NavBar(props) {

    const [filter, setFilter] = useState([]);
    const history = useHistory()
    
    let username = sessionStorage.getItem('@user')
    let direction = ""
    let route = " ";
    
    if(username == null){
        direction = "login"
        route = '/login'
    }else{
        direction = "profile"
        route = '/profile'
    }
    const showHiddenBar = () => {
        const main = document.querySelector("main");
        main.classList.toggle('main');
        
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        logout()
        sessionStorage.removeItem('@user')
        history.push('')
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
                    <li><strong><Link style={{textDecoration:"none"}} to={route}>{direction}</Link></strong></li>
                    <li><strong>Contact Us</strong></li>
                </ul>
                <Link className="logout" onClick={handleLogout}>logout</Link>
            </main>
        </div>
    );
}
