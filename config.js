const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MongoDB_URL:process.env.MongoDB_URL,
    PORT:process.env.PORT
}