const mongoose = require('mongoose');
const { Schema } = mongoose; // Destructure Schema for cleaner code

// Define the Book Schema
const booksSchema = new Schema({
    Title: {
        type: String,
        required: true // Ensuring Title is mandatory
    },
    Image: {
        type: String,
        default: 'no-image.jpg' // Placeholder for Image if not provided
    },
    Author: {
        type: String,
        required: true
    },
    Year_Of_Publication: {
        type: Number,
        min: 0 // Year cannot be negative
    },
    Topic: {
        type: String,
        default: 'General'
    },
    Price: {
        type: Number,
        min: 0 // Price cannot be negative
    },
    Reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

// Export the model
module.exports = mongoose.model('Book', booksSchema);
