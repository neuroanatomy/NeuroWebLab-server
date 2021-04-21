const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRouter = require("./apiRouter").router;
const server = express();

const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const MongoClient = require('mongodb').MongoClient;
//const fileUpload = require('express-fileupload');



//Middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());
//server.use(fileUpload());
const port = process.env.PORT || 5001;

server.use((req, res, next) => {
    res.setHeader('Acces-Control-Allow-Origin', '*');
    res.setHeader('Acces-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods', 'Content-Type', 'Authorization');
    next();
})

server.use("/api/", apiRouter);
server.listen(port, () => {
    console.log(`[OK] Serveur lancé dans le port ${port}`);
});