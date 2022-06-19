//Starting point of app
const connection = require("./db")
const cors = require("cors");
const express = require("express");

connection();
const app = express();
app.use(express.json());
app.use(cors);
const port = process.env.PORT || 8080;
app.listen(port, ()=>console.log('Listening on port ${port}...'));