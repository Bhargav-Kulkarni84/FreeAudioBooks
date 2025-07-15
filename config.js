const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MongoDB_URL:process.env.MongoDB_URL,
    PORT:process.env.PORT,
    MURF_API_KEY : process.env.MURF_API_KEY
}