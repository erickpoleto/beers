import React, {useEffect, useState} from 'react';
import {FaSearch, FaPlusCircle, FaFacebookF, FaUser} from 'react-icons/fa'

import './styles.css'
import Footer from '../footer/index.js'

import { Link } from 'react-router-dom';
import { showData, getCategories, getCountry, getPaginatedItems } from '../../services/functionsJson.js'
import Login from '../login';


export default function Home() { 

    let route = " ";
    const [categories, setCategories] = useState([]);
    let username = localStorage.getItem('@local_username')
    
    if (username.length > 0){
        route = "/"
    }else {
        route = "/login"
    }
    const verify = () =>{
    }

    useEffect(() => {     
        setCategories(getCategories);
    }, []);
    
    const getOnClickCategory = (event) => {
        const targ = event.target.parentNode;
        localStorage.setItem("@category-name", targ.classList);
        console.log(localStorage.getItem('@category-name'));
    };

    return(
        <div className="home-container">
            <header>
                <div>
                    <span>
                        <Link to={route} style={{textDecoration:'none'}}>
                        <strong>{username}</strong>
                        <FaUser size={30} color='white'></FaUser>
                        </Link>
                    </span>
                    <h1>BeerS</h1>
                    <strong>Find any beer you want</strong>
                    <form>
                        <input type='text' placeholder="Search">        
                        </input>
                        <button type="submit">
                            <FaSearch size={20} color="#000"></FaSearch>
                        </button>
                        <select>
                            <option value="style">Style</option>
                        </select>
                    </form>
                </div>
            </header>
            <main>
                <h2>Choose one category to see the BeerS</h2>
                <ul>
                    {categories.map(item =>             
                        <li>    
                            <div>
                                <strong>{item.category}</strong>
                                <p>strong, good, and beauty</p>
                                <span className={item.category}>
                                    <Link className={item.category} onClick={getOnClickCategory} to='/items'>
                                        <FaPlusCircle size={40} color="white"></FaPlusCircle>
                                    </Link>
                                </span>
                            </div>
                        </li>
                        )
                    }         
                </ul>
            </main>
            <Footer></Footer>
        </div>
    );
}

 