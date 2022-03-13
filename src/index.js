import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

// function App() {
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])


//     function addItem() {
//         setThingsArray(prevThingsArray => {
//             return [...prevState, `Thing ${prevThingsArray.length + 1}`]
//         })
//     }

//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

//     return (
//         <div>
//             <button onClick={addItem}>add Item</button>
//             {thingsElements}
//         </div>
//     )

// }

ReactDOM.render(<App darkMode={false} />, document.getElementById("root"))