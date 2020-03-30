import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Footer from '../footer';
import NavBar from '../navBar';

import { getInfoFromName } from '../../services/functionsJson.js';

import BottleBeer from '../../staticImgs/bottleBeer.png';

export default function About() {

    const [name, setName] = useState([]);

    useEffect(() => {
        setName(getInfoFromName(localStorage.getItem('@name-beer')));
    }, []);

    return(
        <div><NavBar></NavBar>
            <div className="about-container">

                <header>
                    <h1>{localStorage.getItem('@name-beer')}</h1>
                </header>
                <main>
                    <div className="about-main-div">
                        <img src={BottleBeer}></img>
                    </div>
                    {name.map( item => {
                        return(
                            <div>
                                <span>
                                    
                                </span>
                                <div>
                                    <strong>{item.category}</strong>
                                    <strong>{item.country}</strong>
                                    <strong>{item.city}</strong>
                                    <strong>{item.ibu}</strong>
                                    <strong><a href="/">{item.site}</a></strong>
                                    <p>
                                        {item.description}
                                    </p>
                                    <i></i>
                                </div>
                            </div>
                            );
                        })
                    }
                </main>
                <Footer></Footer>
            </div>
        </div>
    );
}