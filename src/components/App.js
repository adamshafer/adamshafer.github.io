import React, { useState, useEffect } from 'react'

import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

import '../styles/App.scss'

function App() {

    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        if(navOpen) {
            document.addEventListener("click", handleOutsideClose)
        } else {
            document.removeEventListener("click", handleOutsideClose)
        }
    });

    const handleOutsideClose = (event) => {
        if (!event.target.matches("#nav-toggle") && !document.querySelector("#app > nav").contains(event.target)) setNavOpen(false)
    }

    const setNavToggle = () => {
        setNavOpen(!navOpen)
    }

    return (
        <div id="app" data-navopen={navOpen}>
            <div id="background"></div>
            <Header setNavToggle={setNavToggle} />
            <Nav />
            <Main />
            <Footer />
        </div>
    )

}

export default App