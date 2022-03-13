import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img
                src="./images/troll-face.png" 
                className="header--image">
            </img>
            <h2 className="header--title">Meme Genarator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}