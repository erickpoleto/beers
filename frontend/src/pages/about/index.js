import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Footer from '../footer';
import NavBar from '../navBar';
import api from '../../services/api'

import { getInfoFromName } from '../../services/functionsJson.js';

import BottleBeer from '../../staticImgs/bottleBeer.png';

export default function About() {

    const [beer, setBeer] = useState([]);
    const name = sessionStorage.getItem('@name-beer')

    useEffect(() => {
        async function getName(){
            const data = {
                name
            }
            try{
                const response = await api.post('/beers/about', data)
                console.info(response.data)
                setBeer(response.data)

            }catch(e){
                alert("something went wrong")
            }
        }
        getName();
    }, []);

    return(
        <div><NavBar></NavBar>
            <div className="about-container">

                <header>
                    <h1>{sessionStorage.getItem('@name-beer')}</h1>
                </header>
                <main>
                    <div className="about">
                        <div className="about-main-div">
                            <img src={BottleBeer}></img>
                        </div>
                        {beer.map( item => {
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
                                    </div>
                                    <i></i>
                                    
                                </div>
                                );
                            })
                            
                        }
                    </div>
                </main>
                <Footer></Footer>
            </div>
        </div>
    );
}

/*refazer*/