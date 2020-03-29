import React, {useEffect, useState} from 'react';
import { FaPlusCircle, FaStar} from 'react-icons/fa'

import './styles.css';
import NavBar from '../navBar/index.js';
import Footer from '../footer/index.js';

import { Link } from 'react-router-dom';

import { getCategories, getName, getNameFromCategory } from '../../services/api.js';


import BottleBeer from '../../staticImgs/bottleBeer.png'

export default function Items() {
    
    const [name, setName] = useState([]);

    useEffect(() => {     
        setName(getNameFromCategory(localStorage.getItem('@category-name')));
        console.log(localStorage.getItem('@category-name'));
    }, []);

    const getOnClickName = (event) => {
        const targ = event.target;
        localStorage.setItem("@name-beer", targ.classList);
        console.info(localStorage.getItem('@name-beer'));
    }

    return(
        <div>
            <NavBar></NavBar>
            <div className="item-container">
                <header>
                    
                    <h1>{localStorage.getItem('@category-name')}</h1>
                    <p>Pale ale is a top-fermented beer made with predominantly pale malt. 
                        The highest proportion of pale malts results in a lighter colour. 
                        The term first appeared around 1703 for 
                        beers made from malts dried with high-carbon coke, which resulted in a lighter colour than other</p>
                    <strong>sort by</strong>
                    <ul>
                        <li>name</li>
                        <li>country</li>
                    </ul>
                </header>
                <main>
                    <ul>
                        {name.map( item => {
                            return(
                                <li>
                                    <h2>{item.name}</h2>
                                    <strong>{item.ibu}</strong>
                                    <strong>{item.country}</strong>
                                    <img src={BottleBeer}/>
                                    <span>
                                        <FaStar size={30} color='black'></FaStar>
                                        <FaStar size={30} color='black'></FaStar>
                                        <FaStar size={30} color='black'></FaStar>
                                    </span>
                                    <button>
                                        <Link to='/about' onClick={getOnClickName} className={item.name} style={{textDecoration:'none', color: 'black'}}>More About</Link>
                                    </button>      
                                </li>
                                )
                            })
                        }
                    </ul>
                </main>
                <Footer></Footer>
            </div>
        </div>
        
    );
}
