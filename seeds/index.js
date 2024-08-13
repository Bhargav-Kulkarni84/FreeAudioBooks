const mongoose = require('mongoose');
const books = require("./books");
const bookModel = require("../models/booksSchema");

mongoose.connect('mongodb://localhost:27017/Books_List', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async()=>{
    await booksSchema.deleteMany({});
    for(let i = 0;i<books.length;i++){
        const newBook = new bookModel({
            Title:`${books[i].Title}`,
            Author:`${books[i].Author}`,
            Year_Of_Publication :`${books[i].Year_Of_Publication}`,
            Topic : `${books[i].Topic}`,
            Price : `${books[i].Price}`
        })
        await newBook.save();
    }
}

seedDB().then(()=>{
    mongoose.connection.close();
})
