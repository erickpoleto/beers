import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Footer from '../footer/index'

import api from '../../services/api';
import './styles.css'
export default function ResetPassword(){

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")

    const history = useHistory()
    const reset = async (e) => {
        e.preventDefault();
        try{
            if(/\s/g.test(password)){
                alert("password cant have white spaces")
                return;
            }
            else if(confirmPassword !== password){
                alert("passwords are different")
                return;
            }
            const data = {
                email,
                password
            }
            console.info(data)
            const response = await api.post('session/resetPassword', data) 
            alert('password changed')
            history.push('/')
        }catch(e){
            console.info(e);
            return alert('invalid email')
        }
    }
    return(
        <div className="forgotpassword-container">
                <header>
                    <Link to="/" style={{textDecoration:'none', color:'black', opacity:'0.6'}}>BeerS</Link>
                </header>
                <main>
                    <h1>Reset your password</h1>
                    <h2>Enter new password</h2>
                    <div>
                        <form onSubmit={reset}>
                            <input value={email} onChange={e=> setEmail(e.target.value)} type="text" placeholder="email" required></input>
                            <input value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder="new password" required></input>
                            <input value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)} type="password" placeholder="confirm password" required></input>
                            <button>Send</button>
                        </form>
                    </div>    
                    
                </main>

                <Footer></Footer>

        </div>
    )
}