import React from 'react'

import '../styles/Nav.scss'

class Nav extends React.Component {
    render() { 
        return (
            <nav>
                <a href="/"><i className="material-icons">home</i>Home</a>
                <a href="/"><i className="material-icons">accessibility_new</i>ImPAct</a>
                <a href="/"><i className="material-icons">account_balance</i>PA University</a>
                <a href="/"><i className="material-icons">attach_money</i>Charity</a>
                <a href="/"><i className="material-icons">emoji_people</i>Volunteering</a>
                <div className="something-useful">Mr. Gilliland says that <a href="https://www.youtube.com/watch?v=m2s0nB2VPvs">something useful</a> should go&nbsp;here.</div>
            </nav>
        )
    }
}

export default Nav