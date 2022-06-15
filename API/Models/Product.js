const mongoose = require('mongoose')
const Category = require('./Category')

const Product = mongoose.model('Product',{
    name: String,
    category: String
})

module.exports = Product