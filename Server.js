
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
let flashCards = require("./flashCards.json");

const app = express();

const save = () => {
    fs.writeFile("./flashCards.json", JSON.stringify(flashCards, null, 2), error => {
        if(error)
            throw(error);
    });
};

app.use(express.static("./"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Main.html");
});

app.get("/flashcards", (req, res) => {
    res.json(flashCards);
});

app.post("/flashcards", bodyParser.urlencoded(), (req, res) => {
    flashCards.push(req.body);
    save();
    res.json({
        status: "success",
        term: req.body
    });
});

app.delete("/flashcards/:index", (req, res) => {
    console.log(`PARAM: ${req.params.index}`)
    delete flashCards[req.params.index];
    save();
});

app.listen(3010, () => {
    console.log("Flashcard app running on localhost:3010");
});

