//Requiring Dependencies Or Requied Files
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const booksSchema = require('./models/booksSchema');

//Database Connection
mongoose.connect('mongodb://localhost:27017/Books_List', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

//Sever and Templationg Engine connection.
app.engine('ejs', ejsMate)
app.set('view engine','ejs');
// app.set('views',path.join(__dirname,"FreeAudioBooks"));

// app.set('views',path.join(__dirname));
app.set('views', path.join(__dirname, 'views'))

//get routes

app.get('/home',(req,res)=>{
    res.render("home.ejs");
})

app.get('/books',async (req,res)=>{
    const books = await booksSchema.find({});
    res.render("books/show",{books});
})

//Connection to the server
app.listen(3000,()=>{
    console.log("CONNECTED TO THE SERVER");
})
