//This file contains all of the program's helper functions

const fs = require("fs");
const path = require("path");
let flashCards = require("../data/flashCards.json");

//save() overwrites the stored file with the newly updated file
const save = (flashcards) => {
    fs.writeFile(path.join("data", "flashCards.json"), JSON.stringify(flashCards, null, 2), error => {
        if(error)
            throw(error);
    });
};

module.exports = {save};