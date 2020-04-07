import React, {useState, useEffect} from 'react';

import api from '../../services/api'
import {Link, useHistory} from 'react-router-dom'

import beer from '../../staticImgs/bottleBeer.png'

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import './styles.css'

import Footer from '../footer'
import NavBar from '../navBar'

export default function Profile() {

  const [beersRate, setBeersRate] = useState([]);
  const history = useHistory();
  const rates = async() => {
    const response = await api.get('/testUsers')
    setBeersRate(response.data.UserRate[0].beer)
  }
  
  const getOnClickName = (event) => {
    try{
        event.preventDefault();
        history.push(`/about?${event.target.className}`)
    }catch{
      
    }
  }

  useEffect(()=>{
    rates();
  },[])
  return (
    <div>
      <NavBar></NavBar>
      <div className="profile-container">
        
        <header>
          <h1>{sessionStorage.getItem("@user")}</h1>
        </header>  
        <main>
          <h2>Liked beers</h2>

          <ul>
            {beersRate.map(item => {
              return(
                <li>
                  <h3>{item.beer.name}</h3>
                  <img src={beer}></img>
                  <Rater rating={item.rate} total={5} interactive={false}></Rater>
                  <button>
                    <Link onClick={getOnClickName} className={item.beer.name} style={{textDecoration:'none', color: 'black'}}>More About</Link>
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