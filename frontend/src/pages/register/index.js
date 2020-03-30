import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css'

import Footer from '../footer';

export default function Register (){
    return(
        <div className="register-container">
            <header>
                <Link to="/" style={{textDecoration:'none', color:'black', opacity:'0.6'}}>BeerS</Link>
            </header>
            <main>
                <h1>Register</h1>
                <h2>Welcome to beers, lets get you as a member</h2>
                <div>
                    <form>
                        <input type="text" placeholder="Username"></input>
                        <input type="email" placeholder="email"></input>
                        <input type="password" placeholder="password"></input>
                        <input type="password" placeholder="confirmPassword"></input>
                        <button>Register</button>
                    </form>
                    <p>Already have an acount?<Link to="/login">Login</Link></p>
                </div>    
                
            </main>

            <Footer></Footer>

        </div>
    )
}