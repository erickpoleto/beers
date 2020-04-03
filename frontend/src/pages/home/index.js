import React, {useEffect, useState} from 'react';
import {FaSearch, FaPlusCircle, FaFacebookF, FaUser} from 'react-icons/fa'

import api from'../../services/api'
import './styles.css'
import Footer from '../footer/index.js'

import { Link, useHistory } from 'react-router-dom';
import { getCategories} from '../../services/functionsJson.js'
import Login from '../login';


export default function Home() { 

    let route = " ";
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('')
    const history = useHistory();
    let username = sessionStorage.getItem('@local_username')

    if(username == null){
        route = '/login'
    }else{
        route = '/'
    }
    useEffect(() => {     
        setCategories(getCategories);
    }, []);
    
    
    const consult = async (e) => {
        e.preventDefault()
        try{
            sessionStorage.setItem('@search', search)
            history.push('/items')
        }catch(err){
            console.info(err)
            alert('something went wrong, try again')
        }
    }
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
                    <form onSubmit={consult}>
                        <input value={search} onChange={e => setSearch(e.target.value)} type='text' placeholder="Search"></input>
                        <button type="submit">
                            <FaSearch size={20} color="#000"></FaSearch>
                        </button>
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
                                    <button type="submit" onClick={e => setSearch(item.category)} onSubmit={consult} to='/items'>
                                        <FaPlusCircle size={40} color="white"></FaPlusCircle>
                                    </button>
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

 