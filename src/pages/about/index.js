import React from 'react';
import {FaStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';
import Footer from '../footer';
import NavBar from '../navBar';

import BottleBeer from '../../staticImgs/bottleBeer.png';

export default function About() {

    return(
        <div><NavBar></NavBar>
            <div className="about-container">
                <header>
                    <h1>IPA</h1>
                </header>
                <main>
                    <div className="about-main-div">
                        <img src={BottleBeer}></img>
                    </div>
                    <div>
                        <span>
                            <FaStar size={30} color="black"></FaStar>
                            <FaStar size={30} color="black"></FaStar>
                            <FaStar size={30} color="black"></FaStar>
                        </span>
                        <div>
                            <strong>Lager</strong>
                            <strong>Brazil</strong>
                            <strong>Poa</strong>
                            <strong>32</strong>
                            <strong><a href="/">www.beers.com</a></strong>
                            <p>This robust, hearty stout is as sturdy as its namesake. Roasted barley is the trademark of stout, 
                                a bittersweet separation from its cousin Porter. 
                                The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.
                            </p>
                            <i></i>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        </div>
    );
}