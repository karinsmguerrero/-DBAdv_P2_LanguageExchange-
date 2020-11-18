const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const uri = "mongodb+srv://test:test123@tec.jlazn.mongodb.net/Proyecto2?retryWrites=true&w=majority";

// connection to db
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

require("./routes/routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});