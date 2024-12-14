const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3500;

module.exports = {
    PORT,
    dbUrl:require('./dbConfig')
}