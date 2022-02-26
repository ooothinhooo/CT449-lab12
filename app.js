const express = require("express");
const cors = require("cors");
const setupContactRouter = require("./app/routes/contact.routes")

const app =express();


app.use(cors());
app.use(express.json());



app.get("/", (req, res) =>{
    res.json({message: "Welcom to contact book application"});

});

setupContactRouter(app);

module.exports = app;