import React from "react"

export default function Star() {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty"
    return (
        <img
            src={`../images/${starIcon}`}
            className="card--Favorite"
            onClick={props.handleClick}
        ></img>
    )
}