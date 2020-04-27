import React from 'react'

import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

import '../styles/App.scss'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {navOpen: false};
        this.handleNavToggle = this.handleNavToggle.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleNavToggle() {
        if (!this.state.navOpen) {
            this.setState({ navOpen: true });
            document.addEventListener("mousedown", this.handleClickOutside);
        } else {
            this.setState({ navOpen: false });
            document.removeEventListener("mousedown", this.handleClickOutside);
        }
    }

    handleClickOutside(event) {
        if (event.target.id === "nav-toggle") return;
        if (!document.querySelector("#app > nav").contains(event.target)) {
            this.setState({ navOpen: false });
        }
    }

    render() { 
        return (
            <div id="app" data-navopen={this.state.navOpen}>
                <div id="background"></div>
                <Header setNavToggle={this.handleNavToggle} />
                <Nav />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App