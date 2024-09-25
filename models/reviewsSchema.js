const mongoose = require('mongoose');
const { Schema } = mongoose; // Destructure Schema for cleaner code

// Define the Review Schema
const reviewsSchema = new Schema({
    message: {
        type: String,
        required: true, // Ensuring message is mandatory
        trim: true // Trims whitespace
    },
    rating: {
        type: Number,
        required: true, // Ensuring rating is mandatory
        min: 1, // Minimum rating of 1
        max: 5 // Maximum rating of 5
    }
});

// Export the Review model
const Review = mongoose.model('Review', reviewsSchema);
module.exports = Review;
