import React, {useEffect, useState} from 'react';

import { FaPlusCircle, FaStar, FaAtom, FaMapMarkedAlt} from 'react-icons/fa'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


import './styles.css';
import NavBar from '../navBar/index.js';
import Footer from '../footer/index.js';
import api from '../../services/api';

import { Waypoint } from 'react-waypoint';

import { Link, useHistory } from 'react-router-dom';


import BottleBeer from '../../staticImgs/bottleBeer.png'

export default function Items() {
    
    const [beer, setBeers] = useState([])
    var search = window.location.search.substring(1).split('&');
    //paginação
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false)
    
    const history = useHistory();
    
    const loadItems= async()=>{
        
        //document.querySelector(window).height();
        if(loading) {
            return;
        }
        try{ 
            setLoading(true);
            const response = await api.post(`/items?search=${search[0]}&page=${page}`)
            setBeers([...beer, ...response.data.docs]);
            setTotal(response.data.total)
            if(response.data.pages == 1){
                return;
            }
            setPage(page + 1);
            setLoading(false);
        }catch(e) {
            console.info(e)
            alert("not found");
            history.push('/')
        }
    }
    useEffect(() =>{
        //async func to get beers
        loadItems();
        
    }, []);

    const getOnClickName = (event) => {
        try{
            event.preventDefault();
            history.push(`/about?${event.target.className}`)
        }catch{
        }
    }
    return(
        <div>
            <NavBar></NavBar>
            <div className="item-container">
                <header>
                    
                    <h1>{search[0].replace(/%20/gi, " ")}</h1>
                    <p>Pale ale is a top-fermented beer made with predominantly pale malt. 
                        The highest proportion of pale malts results in a lighter colour. 
                        The term first appeared around 1703 for 
                        beers made from malts dried with high-carbon coke, which resulted in a lighter colour than other</p>
                    <strong>sort by</strong>
                    <ul>
                        <li><button style={{border:'none', background:'none'}}>name</button></li>
                        <li><button style={{border:'none', background:'none'}}>country</button></li>
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
                                    <Rater rating={item.rate} total={5} interactive={false}></Rater>
                                    <button>
                                        <Link onClick={getOnClickName} className={item.name} style={{textDecoration:'none', color: 'black'}}>More About</Link>
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
