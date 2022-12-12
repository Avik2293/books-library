const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const category = require("./Data/category.json");
const allBooks = require("./Data/booksData.json");



app.get("/", (req, res) => {
    res.send("Server working");
});

app.get("/categories", (req, res) => {
    res.send(category);
});

app.get("/books", (req, res) => {
    res.send(allBooks);
});

app.get("/category/:id", (req, res) => {
    const catID = req.params.id;

    const booksByCat = allBooks.filter((book) => book.category_id == catID);
    res.send(booksByCat);

});

app.get("/book/:id", (req, res) => {
  const bookID = req.params.id;
  const bookByID = allBooks.find((book) => book.id == bookID);
  res.send(bookByID);
});

app.listen(port, () => {
    console.log("Server is running.", port);
});