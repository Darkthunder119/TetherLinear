import React from 'react';
//import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import './HeaderNav.scss';

import user from "../../assets/images/Mohan-muruge.jpg";

export default function HeaderNav({openModal}) {
  
    return (
        <header className="header">
            
            {/*<nav className="header__nav">
                <NavLink className="header__nav-link">Create</NavLink>
                <NavLink className="header__nav-link">Notifications</NavLink>
                <NavLink className="header__nav-link">Search</NavLink>
                <NavLink className="header__nav-link">Profile</NavLink>
            </nav>*/}

            <nav className="header__nav">
                <button className="header__nav-button" onClick={openModal}>Create</button>
                <span className="header__nav-link">
                    <FontAwesomeIcon icon={faBell} />
                </span>
                <span className="header__nav-link">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <img className="header__nav-profile" src={user}/>
            </nav>
        </header>
    )
}