//import modules
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

//import url

const url = require('./url')

//create rest object

let app = express()

//set json mime type

app.use(bodyparser.json())

//encoding the JSON

app.use(bodyparser.urlencoded({ extended: false }))

// enable cors

app.use(cors())


//import product routes
const productRoutes = require('./routes/productRoutes')
app.use('/', productRoutes)

//import the user routes

const userRoutes = require('./routes/userRoutes')
app.use('/', userRoutes)

//import cart Routes
const cartRoutes = require('./routes/cartRoutes')
app.use('/', cartRoutes)


//conect mongodb

mongoose.connect(url, { dbName: "miniprj" }).then(() => {
    console.log("Connection Success");


}, (err) => {
    console.log("Connection Failed :-", err);

})

//Authentication
const LOGIN = require('./Authentication/login/login')
app.use("/login", LOGIN)

//create the port

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server is listeninig on port no ${port}`);

})