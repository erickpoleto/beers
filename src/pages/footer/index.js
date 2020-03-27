import React from 'react';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';

import './styles.css'

export default function Footer() {
    return(
        <footer>
            <strong>BeerS social medias</strong>
            <span><a href="/"><FaFacebookF size="18px" color="black"></FaFacebookF></a></span>
            <span><a href="/"><FaInstagram size="18px" color="black"></FaInstagram></a></span>
            <p>Use of this website is subject to the terms and conditions 
                of the Terms of Use and Privacy Policy.</p>
            <b>© BeerS. Todos os direitos reservados.</b>
        </footer>
    );
}