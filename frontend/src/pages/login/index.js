import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
import './styles.css'

import Footer from '../footer';

export default function Login (){
    const[username, setUserName] = useState("");
    const[password, setPassword] = useState("");
    
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        const data = {
            username,
            password
        }
        try{
            
            const response = await api.post("sessionpost", data);
            console.info(response)
            sessionStorage.setItem('@local_username', username);
            alert('success')
            history.push('/');
        }catch(err){
            alert("username or password invalids");
            console.info(data)
            console.info(api.post("sessionpost", data))
        }
    }

    return(
        <div className="login-container">
            <header>
                <Link to="/" style={{textDecoration:'none', color:'black', opacity:'0.6'}}>BeerS</Link>
            </header>
            <main>
                <h1>Login</h1>
                <h2>Welcome back, Login to your account</h2>
                <div>
                    <form onSubmit={handleLogin}>
                        <input value={username} onChange={e=> setUserName(e.target.value)} type="text" placeholder="Username" required></input>
                        <input value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder="password" required></input>
                        <button>Login</button>
                    </form>
                    <p>dont have an account? <Link to="/register">register</Link></p>
                </div>    
                
            </main>

            <Footer></Footer>

        </div>
    )
}