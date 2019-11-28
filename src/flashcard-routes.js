//This file holds the API for the flashcards

const { Router } = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const lib = require("./lib.js");

const router = new Router();

let flashCards = require("../data/flashCards.json");

//-----ROUTING

//READ
router.get("/", (req, res) => {
    res.json(flashCards);
});

//CREATE
router.post("/", bodyParser.urlencoded(), (req, res) => {
    flashCards.push(req.body);
    lib.save();
    res.json({
        status: "success",
        term: req.body
    });
});

//DELETE
router.delete("/:index", (req, res) => {
    delete flashCards[req.params.index];
    lib.save();
});

module.exports = router;