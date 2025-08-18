const { Pool } = require("pg");
require("dotenv").config();

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
    host: process.env.HOST, // or wherever the db is hosted
    user: process.env.USER,
    database: process.env.DATABASE,
    password: "<role_password>",
    port: process.env.PORT // The default port
});
