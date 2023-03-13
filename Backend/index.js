const dotenv = require('dotenv');
const bodyParser =  require("body-parser");
const express = require('express');
const app = express();
dotenv.config();
const connection = require('./src/config/db.config')
const router = require('./src/router/index')
app.listen(process.env.PORT, () => {
    console.log(`Application is listening at port ${process.env.PORT}`)
})

app.get("/",(req,res) => {
    console.log("hello")
    res.send("hello")
})
router(app)
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());



module.exports = app 