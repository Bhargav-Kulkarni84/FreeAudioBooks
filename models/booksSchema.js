const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    Title:String,
    Author:String,
    Year_Of_Publication :Number,
    Topic : String,
    Price : Number
})

module.exports = mongoose.model("book",booksSchema);
//Collection => Books
//mongoose Model (the variable with which we will be able 
//to access the db, which we will be exporting) => booksSchema(for now);