import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import { FaAtom, FaMapMarked, FaMapMarker, FaBlog, FaSignature, FaBook} from 'react-icons/fa'

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css';

import Footer from '../footer';
import NavBar from '../navBar';
import api from '../../services/api'
import unsplashApi from '../../services/unsPlashApi'

export default function About() {

    const [beer, setBeer] = useState([]);
    const [image, setImage] = useState([]);
    const name = window.location.search.substring(1).split('&');
    const random = Math.floor(Math.random() * 10);

    const getName = async() => {
        try{
            const response = await api.post(`/about?search=${name[0]}`)
            setBeer(response.data.docs)
        }catch(e){
            alert("something went wrong")
        }
    }

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
    const unsPlash = async () => {
        const response = await unsplashApi.get(`search/photos?page=${random}&query=bottle%20of%20beer`)
        
        setImage(response.data.results[random].urls.small)
    }

    useEffect(() => {
        getName();
        unsPlash();
    }, []);

    return(
        <div><NavBar></NavBar>
            <div className="about-container">
                <main>
                    <ul>
                        {beer.map( item => {
                            return(
                                <li>
                                    <h1>{item.name}</h1>
                                    <img src={image}></img>
                                    <strong><FaSignature size={20} style={{marginRight:"5px"}}></FaSignature>{item.category}</strong>
                                    <strong><FaMapMarked size={20} style={{marginRight:"5px"}}></FaMapMarked>{item.country}</strong>
                                    <strong><FaMapMarker size={20} style={{marginRight:"5px"}}></FaMapMarker>{item.city}</strong>
                                    <strong><FaAtom size={20} style={{marginRight:"5px"}}></FaAtom> ibu:{item.ibu}</strong>
                                    <strong><FaBlog size={20} style={{marginRight:"5px"}}></FaBlog><a href="/">{item.site}</a></strong>
                                    <span><Rater onRating={async (rating)=>{rate(item._id, rating.rating)}} rating={item.rate} total={5} interactive={true}></Rater></span>
                                    <strong><FaBook size={20}></FaBook></strong>
                                    <p>
                                        {item.description}
                                    </p>
                                    
                                </li>
                                );
                            })
                        }
                    </ul>
                </main>
                <Footer></Footer>
            </div>
        </div>
    );
}

/*refazer*/