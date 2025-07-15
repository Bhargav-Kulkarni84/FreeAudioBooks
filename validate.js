const Joi = require('joi');

const ExpressError = require('./utils/ExpressError');

// Validation Middleware
function validateBook (req, res, next) {
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


module.exports = validateBook;