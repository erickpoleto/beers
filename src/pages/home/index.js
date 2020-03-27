import React, {useEffect, useState} from 'react';
import {FaSearch, FaPlusCircle, FaFacebookF} from 'react-icons/fa'

import './styles.css'
import Footer from '../footer/index.js'

import { Link } from 'react-router-dom';
import { showData, getCategories, getCountry, getPaginatedItems } from '../../services/api.js'

export default function Home() { 

    const [categories, setCategories] = useState([]);

    useEffect(() => {     
        setCategories(getCategories);
    }, []);
    
    return(
        <div className="home-container">
            <header>
                <div>
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
                                <span>
                                    <Link to="/items">
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

 