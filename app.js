// Requiring Dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const books = require('./routes/books');

const app = express();
app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/books',books);


// Database Connection
const {MongoDB_URL} = require('./config');
mongoose.connect(MongoDB_URL)
.then(() => {
    console.log("Database Connection Succesful");
})
.catch(err => {
    console.error("Database Connection Error:", err);
});

// Start Server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
