// Requiring Dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const Joi = require('joi');

// Requiring Models and Utilities
const bookModel = require('./models/booksSchema');
const Review = require('./models/reviewsSchema');
const ExpressError = require('./utils/ExpressError');
const catchAsync = require('./utils/catchAsynch');

// Database Connection
mongoose.connect('mongodb://localhost:27017/Books_List', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connection Open");
})
.catch(err => {
    console.error("MongoDB Connection Error:", err);
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// Setting up Express and Template Engine
const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Validation Middleware
const validateBook = (req, res, next) => {
    const booksSchema = Joi.object({
        Title: Joi.string().required(),
        Image: Joi.string().required(),
        Author: Joi.string().required(),
        Year: Joi.number().min(0).required(),
        Topic: Joi.string().required(),
        Price: Joi.number().min(0).required()
    });
    const { error } = booksSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    }
    next();
};

// Routes
app.get('/', (req, res) => {
    res.render("home");
});

app.get('/test', (req, res) => {
    res.render("books/bootstrap");
});

app.get('/home', (req, res) => {
    res.render("home");
});

app.get('/books', catchAsync(async (req, res) => {
    const books = await bookModel.find({});
    res.render("books/titles", { books });
}));

app.get('/books/new', (req, res) => {
    res.render('books/new');
});

app.get('/books/edit/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const books = await bookModel.findById(id);
    res.render('books/edit', { books });
}));

app.get('/books/:id', catchAsync(async (req, res) => {
    const books = await bookModel.findById(req.params.id).populate('Reviews');
    res.render('books/show', { books });
}));

// PUT Route for Editing Books
app.put('/books/edit/:id', validateBook, catchAsync(async (req, res) => {
    const { id } = req.params;
    const { Title, Author, Year, Topic, Price } = req.body;
    const updatedBook = await bookModel.findByIdAndUpdate(id, {
        Title,
        Author,
        Year_Of_Publication: Year,
        Topic,
        Price
    });
    res.redirect(`/books/${updatedBook._id}`);
}));

// POST Route for Creating Books
app.post('/books/new', validateBook, catchAsync(async (req, res) => {
    const { Title, Author, Year, Topic, Price } = req.body;
    const newBook = new bookModel({
        Title,
        Author,
        Year_Of_Publication: Year,
        Topic,
        Price
    });
    await newBook.save();
    res.redirect('/books');
}));

// POST Route for Adding Reviews
app.post('/books/:id/reviews', catchAsync(async (req, res) => {
    const book = await bookModel.findById(req.params.id);
    const { Message, Rating } = req.body;
    const newReview = new Review({ message: Message, rating: Rating });
    book.Reviews.push(newReview);
    await newReview.save();
    await book.save();
    res.redirect(`/books/${book._id}`);
}));

// DELETE Route for Deleting Books
app.delete('/books/:id', catchAsync(async (req, res) => {
    await bookModel.findByIdAndDelete(req.params.id);
    res.redirect('/books');
}));

// Handling Invalid Routes
app.all('*', (req, res, next) => {
    next(new ExpressError("Page Not Found", 404));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh No, Something went wrong!";
    res.status(statusCode).render('error', { err });
});

// Start Server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
