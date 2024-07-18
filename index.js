require("dotenv").config();
const express = require('express')
const app = express()
app.use(express.json());

const print = require("./controllerget");
const read = require("./controllerpost")

app.get('/home', print);

app.post('/user', read);

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})