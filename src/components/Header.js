import React from 'react'

import '../styles/Header.scss'

function Header(props) {
    return (
        <header>
            <a href="/" className="logo">
                <img src="/images/pa-logo.png" alt="" />
                <span>Athlete<span>Dashboard</span></span>
            </a>
            <div className="countdown"><span>124</span>days remaining<br />in quarter</div>
            <div className="nav-toggle" onClick={props.setNavToggle}><i></i><i></i><i></i></div>
        </header>
    )
}

export default Header