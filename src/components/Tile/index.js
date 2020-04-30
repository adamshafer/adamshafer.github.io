import React, { useState } from "react"

import Button from "../Button/index"

import "./styles.scss"

function Tile(props) {

    // is this weird? 
    // since there are four tiles on Main, am i going to be loading data four times? should each tile be its own component?
    const [data/*, setData*/] = useState({
        impact: {
            pointsEarned: 128,
            message: "Nice work, bro."
        },
        playerDevelopment: {
            earned: 1250,
            used: 300,
            remaining: 950,
            electiveLinks: [
                "/#1",
                "/#2",
                "/#3"
            ]
        },
        charity: {
            donated: 550,
            remaining: 1450
        },
        volunteerHours: {
            hours: 24
        }
    })
    
    const renderTileData = (type) => {
        const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (type === "impact") return ( 
            <svg className="tile__pie" viewBox="0 0 33.83098862 33.83098862" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
                <circle className="tile__pie-background" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                <circle className="tile__pie-circle" stroke="#0fa" strokeWidth="2" strokeDasharray={data.impact.pointsEarned/2.5 + ",100"} fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                <g className="tile__pie-info">
                    <text className="tile__pie-percent" x="16.91549431" y="15.5" alignmentBaseline="central" textAnchor="middle">{data.impact.pointsEarned}</text>
                    <text className="tile__pie-subline" x="16.91549431" y="20.5" alignmentBaseline="central" textAnchor="middle">{data.impact.message}</text>
                </g>
            </svg>
        )
        if (type === "player-development") return ( 
            <>
                <div className="tile__money">
                    <div className="tile__money-label">Earned<span className="tile__money-number"><sup className="tile__money-symbol">$</sup>{numberWithCommas(data.playerDevelopment.earned)}</span></div>
                    <div className="tile__money-label">Used<span className="tile__money-number"><sup className="tile__money-symbol">$</sup>{numberWithCommas(data.playerDevelopment.used)}</span></div>
                    <div className="tile__money-label">Remaining<span className="tile__money-number"><sup className="tile__money-symbol">$</sup>{numberWithCommas(data.playerDevelopment.remaining)}</span></div>
                </div>
                <div className="tile__electives">
                    <Button className="button--secondary tile__elective-button" link={data.playerDevelopment.electiveLinks[0]} text="Elective 1" />
                    <Button className="button--secondary tile__elective-button" link={data.playerDevelopment.electiveLinks[1]} text="Elective 2" />
                    <Button className="button--secondary tile__elective-button" link={data.playerDevelopment.electiveLinks[2]} text="Elective 3" />
                </div>
            </>
        )
        if (type === "charity") return ( 
            <div className="tile__money tile__money--larger">
                <div className="tile__money-label">Donated<span className="tile__money-number"><sup className="tile__money-symbol">$</sup>{numberWithCommas(data.charity.donated)}</span></div>
                <div className="tile__money-label">Remaining<span className="tile__money-number"><sup className="tile__money-symbol">$</sup>{numberWithCommas(data.charity.remaining)}</span></div>
            </div>
        )
        if (type === "volunteer-hours") return ( 
            <div className="tile__hours">{data.volunteerHours.hours}</div>
        )
    }

    return (
        <div className="tile">
            <h2 className="tile__heading">{props.heading}</h2>
            {renderTileData(props.type)}
            <Button className="button--primary tile__main-button" link={props.buttonLink} text={props.buttonText} />
        </div>
    )

}

export default Tile