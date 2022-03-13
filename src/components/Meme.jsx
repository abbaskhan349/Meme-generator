import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomIamge: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(async () => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomIamge: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                ></input>
                <input 
                    type="text"
                    placeholder="bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                ></input>
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image!!!
                </button> 
            </div>
            <div className="meme">
                <img src={meme.randomIamge} className="meme--image"></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}