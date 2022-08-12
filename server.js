const express = require("express")

const server = express();

const wordle = "laser"

server.get("/guess/:word", (req, res) => {
    const userGuess = req.params.word;
    let result = [];

    for (let i = 0; i < userGuess.length; i++) {
        let ch = userGuess[i]
        if (wordle[i] == ch) {
            result.push("green")
        }
        else if (wordle.includes(ch)) {
            result.push("yellow")
        } else {
            result.push("gray");
        }
    }
    res.json(result)
})

server.use(express.static("public"))

server.listen(3000, () => {
    console.log("server is worky :)");
})