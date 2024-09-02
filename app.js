//Requiring Dependencies Or Requied Files
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');

const bookModel = require('./models/booksSchema');
const Joi = require('joi');

const methodOverride = require('method-override');

const ExpressError = require('./utils/ExpressError');
const catchAsync = require('./utils/catchAsynch');



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
app.set('views', path.join(__dirname, 'views'))

// Used for rendering form data it will parse the content encoded in the url
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//Middleware for data validation

const validateCampground = (req,res,next)=>{
    const booksSchema = Joi.object({
        Title:Joi.string().required(),
        Image:Joi.string().required(),
        Author:Joi.string().required(),
        Year_Of_Publication :Joi.number().min(0).required(),
        Topic : Joi.string().required(),
        Price : Joi.number().min(0).required()
    })

    const {error} = booksSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el=>el.message).join(',')
        throw new ExpressError(msg,400);
    }
    else{
        next();
    }
}

//get routes

app.get('/',(req,res)=>{
    res.render("home.ejs");
})

app.get('/test',(req,res)=>{
    res.render("books/bootstrap.ejs");
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
    
app.get('/books/edit/:id',catchAsync(async(req,res)=>{
    const id = req.params.id;
    const books = await bookModel.findById(id);
    res.render('books/edit',{books});   
}))

app.get('/books/:id',catchAsync(async(req,res)=>{
    const books = await bookModel.findById(req.params.id);
    res.render('books/show',{books});
}))

//Put Routes

app.put('/books/edit/:id',validateCampground,catchAsync(async(req,res,next)=>{
        console.log("Post Route");
    const {id} = req.params;
    const {Title,Author,Year,Topic,Price} = req.body;
   const book = await bookModel.findByIdAndUpdate(id,{
        Title,
        Author,
        Year_Of_Publication:Year,
        Topic,
        Price
    });
    res.redirect(`/books/${book._id}`);
}));

// Post routes

app.post('/books/new',validateCampground,catchAsync(async(req,res,next)=>{
    
    // //Adding the new books to the database
    // //     throw new ExpressError("Fill The Form Data Please",404);
    // // }

    // //Defining booksSchema
    // const booksSchema = Joi.object({
    //         Title:Joi.string().required(),
    // // if(!req.body.Title){
    //         Image:Joi.string().required(),
    //         Author:Joi.string().required(),
    //         Year_Of_Publication :Joi.number().min(0).required(),
    //         Topic : Joi.string().required(),
    //         Price : Joi.number().min(0).required()
    // })

    // //Passing the data through our joi schema for validation.

    // // const result = booksSchema.validate(req.body)
    // // console.log(result);
    
    // const {error} = booksSchema.validate(req.body) //Syntax .validate comes from joi schema syntax.
    
    // if(error){
    //     //It will just structure it.
    //     const msg = error.details.map(el=>el.message).join(',') 
    //     throw new ExpressError(msg,400)
    // }
    //     console.log(result);

    const {Title,Author,Year,Topic,Price} = req.body;
    const newBook = new bookModel({
            Title,
            Author,
            Year_Of_Publication:Year,
            Topic,
            Price
    })
    await newBook.save();
    res.redirect('/books');
}))

//Delete Routes

app.delete('/books/:id', catchAsync(async (req, res) => {
    const id = req.params.id;
    await bookModel.findByIdAndDelete(id);
    res.redirect('/books');
}));


app.all('*',(req,res,next)=>{
    // res.send("404!!!");
    next(new ExpressError("Page Not Found",404))
})

//Error Handeling Route
app.use((err,req,res,next)=>{
    // res.send("Handeled Error");
    // const {statusCode=500 , message="Hanndeled Error"} = err
    // res.status(statusCode).send(message);
    const {statusCode=500} = err;
    if(!err.message){
        err.message="Oh No, Something went wrong!";
    }
    res.status(statusCode).render('error',{err});
})

//Connection to the server
app.listen(3000,()=>{
    console.log("CONNECTED TO THE SERVER");
}) 
