import React, {useEffect, useState} from 'react';
import { FaPlusCircle, FaStar} from 'react-icons/fa'

import './styles.css';
import NavBar from '../navBar/index.js';
import Footer from '../footer/index.js';

import { Link } from 'react-router-dom';

import BottleBeer from '../../staticImgs/bottleBeer.png'

export default function Items() {
    return(
        <div>
            <NavBar></NavBar>
            <div className="item-container">
                <header>
                    <h1>PALE ALE</h1>
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
                        <li>
                            <h2>IPA</h2>
                            <strong>ibu</strong>
                            <strong>brazil</strong>
                            <img src={BottleBeer}/>
                            <span>
                                <FaStar size={30} color='black'></FaStar>
                                <FaStar size={30} color='black'></FaStar>
                                <FaStar size={30} color='black'></FaStar>
                            </span>
                            <button>
                                <Link to='/about' style={{textDecoration:'none', color: 'black'}}>More About</Link>
                            </button>
                        </li>
                        
                        <li>
                            <h2>IPA</h2>
                            <strong>ibu</strong>
                            <strong>brazil</strong>
                            <img src={BottleBeer}/>
                            <span>
                                <FaStar size={30} color='black'></FaStar>
                                <FaStar size={30} color='black'></FaStar>
                                <FaStar size={30} color='black'></FaStar>
                            </span>
                            <button>
                                <Link to='/about' style={{textDecoration:'none', color: 'black'}}>More About</Link>
                            </button>
                        </li>
                        
                    </ul>
                </main>
                <Footer></Footer>
            </div>
        </div>
    );
}