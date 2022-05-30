const path = require('path');

/* Setting path enviroment */
require("dotenv").config({
    path: path.resolve(process.cwd(),"./src/.env")
});

module.exports={
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PWD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PWD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PWD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT
    }
}  