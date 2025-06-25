const express = require('express');
const router = express.Router();

// Requiring Models and Utilities
const bookModel = require('../models/booksSchema');
const Review = require('../models/reviewsSchema');
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsynch');

const validateBook = require('../validate');

router.get('/', catchAsync(async (req, res) => {
    const books = await bookModel.find({});
    res.render("books/titles", { books });
}));

router.get('/new', (req, res) => {
    res.render('books/new');
});

router.get('/edit/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const books = await bookModel.findById(id);
    res.render('books/edit', { books });
}));

router.get('/:id', catchAsync(async (req, res) => {
    const books = await bookModel.findById(req.params.id).populate('Reviews');
    res.render('books/show', { books });
}));

// PUT Route for Editing Books
router.put('/edit/:id', validateBook, catchAsync(async (req, res) => {
    const { id } = req.params;
    const { Title, Author, Year, Topic, Price } = req.body;
    const updatedBook = await bookModel.findByIdAndUpdate(id, {
        Title,
        Author,
        Year_Of_Publication: Year,
        Topic,
        Price
    });
    res.redirect(`/${updatedBook._id}`);
}));

// POST Route for Creating Books
router.post('/new', validateBook, catchAsync(async (req, res) => {
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
router.post('/:id/reviews', catchAsync(async (req, res) => {
    const book = await bookModel.findById(req.params.id);
    const { Message, Rating } = req.body;
    const newReview = new Review({ message: Message, rating: Rating });
    book.Reviews.push(newReview);
    await newReview.save();
    await book.save();
    res.redirect(`/${book._id}`);
}));

// DELETE Route for Deleting Books
router.delete('/:id', catchAsync(async (req, res) => {
    await bookModel.findByIdAndDelete(req.params.id);
    res.redirect('/books');
}));

// Handling Invalid Routes
router.all('*', (req, res, next) => {
    next(new ExpressError("Page Not Found", 404));
});

// Error Handling Middleware
router.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh No, Something went wrong!";
    res.status(statusCode).render('error', { err });
});

module.exports = router;