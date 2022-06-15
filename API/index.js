const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

const categoryRoutes = require('./Routes/categoryRoutes')
const productRoutes = require('./Routes/productRoutes')
const brandRoutes = require('./Routes/brandRoutes')

app.use('/category',categoryRoutes)
app.use('/product',productRoutes)
app.use('/brand',brandRoutes)

app.get('/',(req, res) => {
    res.json({message: "working"})
})




mongoose
    .connect('mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000')
    .then(() => {
        console.log("connecting to MongoDB")
        app.listen(5000)
    })
    .catch((err) => console.log(err))