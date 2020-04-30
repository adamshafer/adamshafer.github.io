import React from "react"

import "./styles.scss"

function Button(props) {
    return (
        <a className={"button " + props.className} href={props.link}>{props.text}</a>
    )
}

Button.defaultProps = {
    className: "button--primary",
    href: "/#",
    text: "Click Me"
}

export default Button