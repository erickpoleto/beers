import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


import Footer from '../footer';
import NavBar from '../navBar';
import api from '../../services/api'

import { getInfoFromName } from '../../services/functionsJson.js';

import BottleBeer from '../../staticImgs/bottleBeer.png';

export default function About() {

    const [beer, setBeer] = useState([]);
    const name = window.location.search.substring(1).split('&');
    useEffect(() => {
        async function getName(){
            try{
                const response = await api.post(`/about?search=${name[0]}`)
                setBeer(response.data.docs)
            }catch(e){
                alert("something went wrong")
            }
        }
        getName();
    }, []);

    const rate = async (id,rate) => {
        try{
            const data = {
                "beer": id.toString(),
                "rate": rate
            }
            const response = await api.post('/rate', data)
        }catch(e){
            alert("only users can vote");
        }
    }

    return(
        <div><NavBar></NavBar>
            <div className="about-container">
                <main>
                        {beer.map( item => {
                            return(
                                <div>
                                    <h1>{item.name}</h1>
                                    <img src={BottleBeer}></img>
                                    <div>
                                        <strong>{item.category}</strong>
                                        <strong>{item.country}</strong>
                                        <strong>{item.city}</strong>
                                        <strong>{item.ibu}</strong>
                                        <strong><a href="/">{item.site}</a></strong>
                                        <Rater onRating={async (rating)=>{rate(item._id, rating.rating)}} rating={item.rate} total={5} interactive={true}></Rater>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                    <i></i>
                                    
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

/*refazer*/