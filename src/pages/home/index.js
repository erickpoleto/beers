import React from 'react';
import {FaSearch, FaPlusCircle, FaFacebookF} from 'react-icons/fa'
import './styles.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div className="home-container">
            <header>
                <div>
                    <h1>BeerS</h1>
                    <strong>Find any beer you want</strong>
                    <form>
                        <input type='text' placeholder="Search">        
                        </input>
                        <button type="submit">
                            <FaSearch size={20} color="#000"></FaSearch>
                        </button>
                        <select>
                            <option value="style">Style</option>
                            <option value="Pale ale">Pale ale</option>
                            <option value="American Pale ale">American Pale ale</option>
                            <option value="vol Pale ale">vol Pale ale</option>
                            
                        </select>
                    </form>
                </div>
            </header>
            <main>
                <h2>Choose one category to see the BeerS</h2>
                <ul>
                    <li>
                        <div>
                            <strong>Pale ale</strong>
                            <p>strong, good, and beauty</p>
                            <span>
                                <Link to="">
                                    <FaPlusCircle size={40} color="white"></FaPlusCircle>
                                </Link>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>Pale ale</strong>
                            <p>strong, good, and beauty</p>
                            <span>
                                <Link to="">
                                    <FaPlusCircle size={40} color="white"></FaPlusCircle>
                                </Link>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>Pale ale</strong>
                            <p>strong, good, and beauty</p>
                            <span>
                                <Link to="">
                                    <FaPlusCircle size={40} color="white"></FaPlusCircle>
                                </Link>
                            </span>
                        </div>
                    </li>
                </ul>
            </main>
            <footer>
                <strong>BeerS social medias</strong>
                <span><FaFacebookF size="18px" color="blue"></FaFacebookF></span>
                <p>Use of this website is subject to the terms and conditions 
                    of the Terms of Use and Privacy Policy.</p>
                <b>© BeerS. Todos os direitos reservados.</b>
            </footer>
        </div>
    );
}