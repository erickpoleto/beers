import React ,{useState}from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
import './styles.css'

import Footer from '../footer';

export default function Register (){

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        if(/\s/g.test(username)){
            alert("username cant have white spaces")
            return;
        }
        else if(confirmPassword !== password){
            alert("passwords are different")
            return;
        }
        else if(/\s/g.test(password)){
            alert("password cant have white spaces")
            return;
        }
        else{
            const data = {
                username,
                email,
                password
            }
            try{
                const response = await api.post('post', data);
                alert('success');
                history.push('/login');
            }catch(e){
                alert("name or email already in use")
            }
        }

    }

    return(
        <div className="register-container">
            <header>
                <Link to="/" style={{textDecoration:'none', color:'black', opacity:'0.6'}}>BeerS</Link>
            </header>
            <main>
                <h1>Register</h1>
                <h2>Welcome to beers, lets get you as a member</h2>
                <div>
                    <form onSubmit={handleRegister}>
                        <input value={username} onChange={e=>setUserName(e.target.value)} type="text" placeholder="username" required></input>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="email" required></input>
                        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="password" required></input>
                        <input value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} type="password" placeholder="confirm password" required></input>
                        <button>Register</button>
                    </form>
                    <p>Already have an acount?<Link to="/login">Login</Link></p>
                </div>    
                
            </main>

            <Footer></Footer>

        </div>
    )
}