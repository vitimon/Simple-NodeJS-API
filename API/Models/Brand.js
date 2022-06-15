const mongoose = require('mongoose')
const Product = require('./Product')

const Brand = mongoose.model('Brand',{
    name: String,
    product: String
})

module.exports = Brand