import React, { useState, useEffect } from 'react';

import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom'

import beer from '../../staticImgs/bottleBeer.png'

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import './styles.css'

import Footer from '../footer'
import NavBar from '../navBar'

export default function Profile() {

  const [beer, setBeer] = useState([]);
  const [filtered, setFiltered] = useState([])
  const [sort, setSort] = useState(1)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [load, setLoad] = useState(false)
  const [images, setImages] = useState([])
  const history = useHistory();



  const loadRates = async () => {
    if (load) {
      return;
    } try {
      setLoad(true);
      const response = await api.get(`/profile?page=${page}&sort=${sort}`)
      console.info(sort)
      setFiltered([...filtered, ...response.data.UserRate.docs])
      setTotal(response.data.total)
      if (response.data.pages == 1) {
        return;
      }
      if (response.data.page == response.data.pages) {
        return;
      }
      setPage(page + 1);
      setLoad(false);
    } catch (e) {
      console.info(e)
      alert("not found");
      history.push('/')
    }
  }

  const getOnClickName = (event) => {
    try {
      event.preventDefault();
      history.push(`/about?${event.target.className}`)
    } catch{

    }
  }

  const handleSearch = async (e) => {
    e.preventDefault()

  }

  useEffect(() => {
    loadRates();
  }, [sort])

  return (
    <div>
      <NavBar search={handleSearch}></NavBar>
      <div className="profile-container">

        <header>
          <h1>{sessionStorage.getItem("@user")}</h1>
        </header>
        <main>
          <h2>Rated</h2>
          <strong>sort by</strong>
          <ul>
            <li><button onClick={e => {
              if (sort === 1) {
                setSort(-1)
                setPage(1)
                setFiltered([])
              } else {
                setSort(1)
                setPage(1)
                setFiltered([])
              }
            }} style={{ border: 'none', background: 'none' }}>date</button></li>

          </ul>
          <ul>
            {filtered.map((item, index) => {
              return (
                <li>
                  <h3>{item.beer.name}</h3>
                  <strong>{item.createdAt}</strong>
                  <img src={item.url}></img>
                  <Rater rating={item.beer.rate} total={5} interactive={false}></Rater>
                  <button>
                    <Link onClick={getOnClickName} className={item.beer.name} style={{ textDecoration: 'none', color: 'black' }}>More About</Link>
                  </button>
                </li>
              )
            })
            }
          </ul>
        </main>
        {console.info(filtered)}
        <Footer></Footer>
      </div>
    </div>
  );
}