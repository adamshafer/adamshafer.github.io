import React from "react"

import "./styles.scss"

function Header(props) {
    return (
        <header className="header">
            <a className="header__logo" href="/#">
                <img className="header__image" src="/images/pa-logo.png" alt="" />
                <span className="header__title">Athlete<span className="header__subtitle">Dashboard</span></span>
            </a>
            <div className="header__days-remaining"><span className="header__days-remaining-number">{props.daysRemaining}</span>days remaining<br />in quarter</div>
            <div className={"header__nav-toggle" + (props.navOpen ? " header__nav-toggle--is-open" : "")} onClick={props.setNavToggle}>
                <i className="header__nav-toggle-line"></i>
                <i className="header__nav-toggle-line"></i>
                <i className="header__nav-toggle-line"></i>
            </div>
        </header>
    )
}

export default Header