import React from "react"

import "./styles.scss"

function UserInfo(props) {
    return (
        <div className="user-info">
            <img className="user-info__photo" src={props.photo} alt={`${props.name}, ${props.title}`} />
            <div className="user-info__name">{props.name}<span className="user-info__title">{props.title}</span></div>
        </div>
    )
}

export default UserInfo