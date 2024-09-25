class ExpressError extends Error {
    constructor(message, statusCode) {
        super(message); // Pass the message to the parent Error class
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;
