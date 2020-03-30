import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css'

import Footer from '../footer';

export default function Login (){
    return(
        <div className="login-container">
            <header>
                <Link to="/" style={{textDecoration:'none', color:'black', opacity:'0.6'}}>BeerS</Link>
            </header>
            <main>
                <h1>Login</h1>
                <h2>Welcome back, Login to your account</h2>
                <div>
                    <form>
                        <input type="text" placeholder="Username"></input>
                        <input type="password" placeholder="password"></input>
                        <button>Login</button>
                    </form>
                    <p>dont have an account? <Link to="/register">register</Link></p>
                </div>    
                
            </main>

            <Footer></Footer>

        </div>
    )
}