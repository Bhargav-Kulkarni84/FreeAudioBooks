//Requiring Dependencies Or Requied Files
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const bookModel = require('./models/booksSchema');

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

// Used for rendering form data

app.use(express.urlencoded({ extended: true }));

//get routes

app.get('/',(req,res)=>{
    res.render("home.ejs");
})

app.get('/home',(req,res)=>{
    res.render("home.ejs");
})

app.get('/books',async (req,res)=>{
    const books = await bookModel.find({});
    res.render("books/titles",{books});
})

app.get('/books/new',async(req,res)=>{
    res.render('books/new');
})

app.get('/books/data',async(req,res)=>{
    // const {Title,Author,Year,Topic,Price} = req.query //getting data from query
    const {Title,Author,Year,Topic,Price} = req.body; //getting data from body passed 
    res.render('books/data',{Title,Author,Year,Topic,Price})
})

app.post('/books/new',async(req,res)=>{
    const body = req.body;
    // res.redirect(`/books/data?Title=${body.title}&Author=${body.Author}&Year=${body.Year}&Topic=${body.Topic}&Price=${body.Price}`) //sending data in terms of query string.
    res.render('books/data', { Title: body.Title, Author: body.Author, Year: body.Year, Topic: body.Topic, Price: body.Price }); //sending data as the body.
})


app.get('/books/:id',async(req,res)=>{

    const books = await bookModel.findById(req.params.id);
    // res.render('books/show',{books});
    res.render('books/show',{books});
})


//Connection to the server
app.listen(3000,()=>{
    console.log("CONNECTED TO THE SERVER");
}) 
