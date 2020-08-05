import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Buttons';
//import ButtonLink from './components/ButtonLink/index.js';



function Menu (){
    return(
        <nav className="Menu">            
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFli logo"/>
            </a>

            <Button className="ButtonLink" href="/">
                
                Novos

            </Button>
        </nav>
    );
}


export default Menu;