import React from "react"

import UserInfo from "../UserInfo/index"

import "./styles.scss"

function Main() {
    return (
        <main className="main">
            <section className="main__section">
                <UserInfo photo="/images/user-photo.jpg" name="Adam Shafer" title="Senior Front End Developer" />

                {/*component for home page -> TILES */}
                <div className="tiles">

                    {/*component for home page -> TILE */}
                    <div className="tile tile--impact">
                        <h2 className="tile__heading">imPAct Points</h2>
                        <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
                            <circle className="circle-chart__background" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                            <circle className="circle-chart__circle" stroke="#0fa" strokeWidth="2" strokeDasharray="64,100" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                            <g className="circle-chart__info">
                                <text className="circle-chart__percent" x="16.91549431" y="15.5" alignmentBaseline="central" textAnchor="middle">128</text>
                                <text className="circle-chart__subline" x="16.91549431" y="20.5" alignmentBaseline="central" textAnchor="middle">Boomshakalaka!</text>
                            </g>
                        </svg>
                        <a className="button button--primary" href="/">Add Points</a>
                    </div>

                    {/*component for home page -> TILE */}
                    <div className="tile tile--player-development">
                        <h2 className="tile__heading">Player Development</h2>
                        <div className="labeled-money">
                            <div>Earned<span><sup>$</sup>1,000</span></div>
                            <div>Used<span><sup>$</sup>1,000</span></div>
                            <div>Remaining<span><sup>$</sup>1,000</span></div>
                        </div>
                        <div className="electives">
                            <a href="/" className="button button--secondary">Elective 1</a>
                            <a href="/" className="button button--secondary">Elective 2</a>
                            <a href="/" className="button button--secondary">Elective 3</a>
                        </div>
                        <a className="button button--primary" href="/">Complete Objectives</a>
                    </div>

                    {/*component for home page -> TILE */}
                    <div className="tile tile--charity">
                        <h2 className="tile__heading">Charity</h2>
                        <div className="labeled-money larger">
                            <div>Donated<span><sup>$</sup>1,000</span></div>
                            <div>Remaining<span><sup>$</sup>500</span></div>
                        </div>
                        <a className="button button--primary" href="/">Donate Now</a>
                    </div>

                    {/*component for home page -> TILE */}
                    <div className="tile tile--volunteer-hours">
                        <h2 className="tile__heading">Volunteer Hours</h2>
                        <div className="hours">24</div>
                        <a className="button button--primary" href="/">Log Hours</a>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Main