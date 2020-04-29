import React from "react"

import "./styles.scss"

function Nav(props) {
    return (
        <nav className={"nav-main" + (props.navOpen ? " nav-main--is-open" : "")}>
            <a className="nav-main__item" href="/"><i className="nav-main__item-icon material-icons">home</i>Home</a>
            <a className="nav-main__item" href="/"><i className="nav-main__item-icon material-icons">accessibility_new</i>ImPAct</a>
            <a className="nav-main__item" href="/"><i className="nav-main__item-icon material-icons">account_balance</i>PA University</a>
            <a className="nav-main__item" href="/"><i className="nav-main__item-icon material-icons">attach_money</i>Charity</a>
            <a className="nav-main__item" href="/"><i className="nav-main__item-icon material-icons">emoji_people</i>Volunteering</a>
            <div className="nav-main__callout">Mr. Gilliland says that <a href="https://www.youtube.com/watch?v=m2s0nB2VPvs">something useful</a> should go&nbsp;here.</div>
        </nav>
    )
}

export default Nav