import React, {useState, useEffect} from 'react';

import api from '../../services/api'
import unsplashApi from '../../services/unsPlashApi'

import {Link, useHistory} from 'react-router-dom'

import beer from '../../staticImgs/bottleBeer.png'

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import './styles.css'

import Footer from '../footer'
import NavBar from '../navBar'

export default function Profile() {

  const [beer, setBeer] = useState([]);
  const [filtered, setFiltered] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [load, setLoad] = useState(false)
  const [images, setImages] = useState([])
  const history = useHistory();



  const loadRates = async() => {
    if(load){
      return;
    }try{ 
      setLoad(true);
      const response = await api.get(`/profile?page=${page}`)
      setBeer([...beer, ...response.data.UserRate.docs]);
      unsPlash();
      setFiltered([...beer, ...response.data.UserRate.docs])
      setTotal(response.data.total)
      if(response.data.pages == 1){
          return;
      }
      setPage(page + 1);
      setLoad(false);
    }catch(e) {
      console.info(e)
      alert("not found");
      history.push('/')
    }
  }
  
  const getOnClickName = (event) => {
    try{
        event.preventDefault();
        history.push(`/about?${event.target.className}`)
    }catch{
      
    }
  }
  const unsPlash = async () => {
    const response = await unsplashApi.get(`search/photos?&query=bottle%20of%20beer`)
        const list = []
        response.data.results.map(item => {
            list.push(item.urls.small)
        })
    setImages([...images, ...list])
  }
  const handleSearch = async(e) => {
    e.preventDefault()
    const filter = beer.filter((beer) => {return beer.name.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1})
    setFiltered(filter)
  }

  useEffect(()=>{
    loadRates();
    unsPlash();
  },[])
  return (
    <div>
      <NavBar current={handleSearch}></NavBar>
      <div className="profile-container">
        
        <header>
          <h1>{sessionStorage.getItem("@user")}</h1>
        </header>  
        <main>
          <h2>Rated</h2>

          <ul>
            {filtered.map((item, index) => {
              return(
                <li>
                  <h3>{item.beer.name}</h3>
                  <img src={images[index]}></img>
                  <Rater rating={item.beer.rate} total={5} interactive={false}></Rater>
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