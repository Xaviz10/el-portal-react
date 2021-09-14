import React from 'react';
// import '../assets/styles/App.scss';

const HolaMundo = () => {
    // const Hello ='Hola Mundo'
    return (
        <header>
            <a className="header__logo" href="#Home">
                <img src="./assets/static/icons/icon-header-elportal--white.svg" alt="El Portal Logo" />
            </a>

            <nav className="header__menu">
                <a className="menu__button" id="hamBtn" >
                    <span className="button--open"></span>
                    <span className="button--close"></span>
                </a>
                <ul className="menu__options">
                    <li>
                        <a href="#Ventas" className="menu-element">Ventas</a>
                    </li>
                    <li>
                        <a href="#Arriendos" className="menu-element">Arriendos</a>
                    </li>
                    <li>
                        <a href="#Emp" className="menu-element">Empeños</a>
                    </li>
                    <li>
                        <a href="#Contactos" className="menu-element">Contactos</a>
                    </li>
                </ul>
            </nav>
        </header>
        // <div className="HolaMundo">
        //     <h1>{Hello}</h1>
        //     <h2>Curso React</h2>
        // </div>
    );
};


export default HolaMundo;