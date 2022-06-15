const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Product = require('./Models/Product')
const Brand = require('./Models/Brand')


app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

const categoryRoutes = require('./Routes/categoryRoutes')

app.use('/category',categoryRoutes)

app.get('/',(req, res) => {
    res.json({message: "working"})
})




mongoose
    .connect('mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000')
    .then(() => {
        console.log("connecting to MongoDB")
        app.listen(3000)
    })
    .catch((err) => console.log(err))