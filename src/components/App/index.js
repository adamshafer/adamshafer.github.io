import React, { useState, useEffect } from "react"

import Header from "../Header/index"
import Nav from "../Nav/index"
import Main from "../Main/index"
import Footer from "../Footer/index"

import "./styles.scss"

function App() {

    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        if(navOpen) {
            document.addEventListener("click", handleOutsideClose)
        } else {
            document.removeEventListener("click", handleOutsideClose)
        }
    })

    const handleOutsideClose = (event) => {
        if (!event.target.matches(".header__nav-toggle") && !document.querySelector(".nav-main").contains(event.target)) setNavOpen(false)
    }

    const setNavToggle = () => {
        setNavOpen(!navOpen)
    }

    return (
        <div className="app">
            <div className="background"></div>
            <Header daysRemaining={128} navOpen={navOpen} setNavToggle={setNavToggle} />
            <Nav navOpen={navOpen} />
            <Main />
            <Footer />
        </div>
    )

}

export default App