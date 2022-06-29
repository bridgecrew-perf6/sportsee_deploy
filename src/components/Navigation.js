import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import iconYoga from "../assets/icon-yoga.png"
import iconSwim from "../assets/icon-swim.png"
import iconBike from "../assets/icon-bike.png"
import iconFitness from "../assets/icon-fitness.png"

/**
 * horizontal and vertical navbar
 * @returns {JSX} - React component
 */
const Navigation = () => {
    return (
        <div>
            <div className='Navigation-horizontale'>
                <img className='logo' src={logo} alt='logo sportsee' />
                <div className='container-nav'>
                    <NavLink className={(nav) => (nav.isActive ? "nav-active" : "nav")} to={"/"}>Accueil</NavLink>
                    <NavLink className={(nav) => (nav.isActive ? "nav-active" : "nav")} to={"/user"}>Profil</NavLink>
                    <NavLink className={(nav) => (nav.isActive ? "nav-active" : "nav")} to={"/settings"}>Réglage</NavLink>
                    <NavLink className={(nav) => (nav.isActive ? "nav-active" : "nav")} to={"/community"}>Communauté</NavLink>
                </div>
            </div>
            <div className='Navigation-verticale'>
                <div className='container-icon'>
                    <img className='icon' src={iconYoga} alt="icone yoga" />
                    <img className='icon' src={iconSwim} alt="icone nageur" />
                    <img className='icon' src={iconBike} alt="icone cycliste" />
                    <img className='icon' src={iconFitness} alt="icone fitness" />
                </div>
                <p className='copiryght'>Copiryght, SportSee 2020</p>
            </div>
        </div>
    );
};

export default Navigation;