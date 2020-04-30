import React from "react"

import UserInfo from "../UserInfo/index"
import Tile from "../Tile/index"

import "./styles.scss"

function Main() {
    return (
        <main className="main">
            <section className="main__section">
                <UserInfo photo="/images/user-photo.jpg" name="Adam Shafer" title="Senior Front End Developer" />
                <div className="tiles">
                    <Tile type="impact" heading="imPAct Points" buttonText="Add Points" buttonLink="/#" />
                    <Tile type="player-development" heading="Player Development" buttonText="Complete Objectives" buttonLink="/#" />
                    <Tile type="charity" heading="Charity" buttonText="Donate Now" buttonLink="/#" />
                    <Tile type="volunteer-hours" heading="Volunteer Hours" buttonText="Add Hours" buttonLink="/#" />
                </div>
            </section>
        </main>
    )
}

export default Main