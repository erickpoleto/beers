import React, {useEffect, useState} from 'react';

import { FaPlusCircle, FaStar, FaAtom, FaMapMarkedAlt} from 'react-icons/fa'


import './styles.css';
import NavBar from '../navBar/index.js';
import Footer from '../footer/index.js';
import api from '../../services/api';

import { Waypoint } from 'react-waypoint';

import { Link } from 'react-router-dom';


import BottleBeer from '../../staticImgs/bottleBeer.png'

export default function Items() {
    
    const [beer, setBeers] = useState([])
    const search = sessionStorage.getItem('@search')
    //paginação
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)

    async function loadItems(){
        
        //document.querySelector(window).height();
        if(loading) {
            return;
        }
        try{ 
            setLoading(true);
            const response = await api.post(`/items?page=${page}&search=${search}`)
            setBeers([...beer, ...response.data]);
            setPage(page + 1);
            setLoading(false);
        }catch(e) {
            console.info(search)
            console.info(e)
            alert("not found");
        }
    } 
    useEffect(() =>{
        //async func to get all beers
        loadItems();
    }, []);

    const getOnClickName = (event) => {
        const targ = event.target;
        sessionStorage.setItem("@name-beer", targ.classList);
    }

    return(
        <div>
            <NavBar></NavBar>
            <div className="item-container">
                <header>
                    
                    <h1>{sessionStorage.getItem('@search')}</h1>
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
                        {beer.map( item => {
                            return(
                                <li>
                                    <h2>{item.name}</h2>
                                    <span>
                                        <FaAtom size={25}></FaAtom>
                                        <strong>{item.ibu}</strong>
                                    </span>
                                    <span>
                                        <FaMapMarkedAlt size={25}></FaMapMarkedAlt>
                                        <strong>{item.country}</strong>
                                    </span>
                                    <img src={BottleBeer}/>
                                    
                                    <button>
                                        <Link to='/about' onClick={getOnClickName} className={item.name} style={{textDecoration:'none', color: 'black'}}>More About</Link>
                                    </button>      
                                </li>
                                )
                            })
                        }
                    </ul>
                    <Waypoint onEnter={loadItems}></Waypoint>
                </main>
                <Footer></Footer>
            </div>
        </div>
        
    );
}
