//const config = require('./configs/app.config.js');
const express = require("express");
const logger = require("morgan");
const db = require('./database/models');

/* Start express instance */
const app=express();

/* Config Express */
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(logger("dev"));


/* Sets Routes */
app.get("/", (req, res)=> res.send(process.env));


app.listen(PORT, ()=> console.warn("Servidor corriendo, Puerto:", PORT));