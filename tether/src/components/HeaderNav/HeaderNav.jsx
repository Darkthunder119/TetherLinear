import React from 'react';
//import { NavLink } from 'react-router-dom';
import './HeaderNav.scss';

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
                <button className="header__nav-link header__nav-button" onClick={openModal}>Create</button>
                <span className="header__nav-link">Notifications</span>
                <span className="header__nav-link">Search</span>
                <div className="header__nav-profile"></div>
            </nav>
        </header>
    )
}