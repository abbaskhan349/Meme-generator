import React from "react"
//import { preview } from "vite"
import './App.css'
import Header from "./components/Header"
import Meme from "./components/Meme"
//import Count from "./components/Count"
//import Star from "./Star"
//import boxes from "./boxes"
//import Box from "./Box"

export default function App() {

    // const [count, setCount] = React.useState(0)
    
    // function add() {
    //     setCount(prevCount => prevCount + 1)
    // }
    // function subtract() {
    //     setCount(prevCount => prevCount - 1)
    // }


    // const [isGoingOut, setIsGoingOut] = React.useState(true)

    // function changeMind() {
    //     setIsGoingOut(prevState => !prevState)
    // }


    //   Card mini project
    // const [contact, setContact] = React.useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (719) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: true
    // })

    // function toggleFavorite() {
    //     setContact(prevContact => ({
    //         ...prevContact,
    //         isFavorite: !prevContact.isFavorite
    //     }))
    // }

    // Boxe Challenge

    // const [squares, setSquares] = React.useState(boxes)

    // function toggle(id) {
    //     setSquares(prevSquares => {
    //         return prevSquares.map((square) => {
    //             return square.id === id ? {...square, on: !square.on} : square
    //         })
    //     })
    // }

    // const squareElements = squares.map(square => (
    //     <Box 
    //         key={square.id} 
    //         id={square.id}
    //         on={square.on}
    //         toggle={toggle}
    //     >
    //     </Box>
    // ))


    return (

        <div>            
            <Header></Header>
            <h1>hi github</h1>
            <Meme></Meme>
        </div>
        
        //some miner change for the git testing 

        // <div className="counter">
        //     <button className="counter--minus" onClick={subtract}>-</button>
        //     <Count number={count}></Count>
        //     <button className="counter--plus" onClick={add}>+</button>
        // </div>

        // <div className="state">
        //     <h1 className="state--title">Do I feel like going out tonight?</h1> 
        //     <div onClick={changeMind} className="state--value">
        //         <h1>{isGoingOut ? "Yes" : "No"}</h1>
        //     </div>   
        // </div>


        // card

        // <main>
        //     <article className="card">
        //         <img src="./images/user.png" className="card-image"></img>
        //         <div className="card--info">
        //             <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}></Star>
        //             <h2 className="card--name">
        //                 {contact.firstName} {contact.lastName}
        //             </h2>
        //             <p className="card--contact">{contact.phone}</p>
        //             <p className="card--contact">{contact.email}</p>
        //         </div>
        //     </article>
        // </main>


        // boxes challenge

        // <main>
        //     {squareElements}
        // </main>
    )
}