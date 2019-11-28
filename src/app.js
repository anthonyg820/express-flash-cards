const express = require("express");
const path = require("path");
const flashcardRoutes = require("./flashcard-routes");

const app = express();

app.use(express.static("./"));

//The below .use() method appends the '/flashcards' to the end of all http requests in the flashcard=routes.js file
app.use("/flashcards", flashcardRoutes);

//The home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "Main.html"));
});

module.exports = app;