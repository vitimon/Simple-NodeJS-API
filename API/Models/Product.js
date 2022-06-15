const mongoose = require('mongoose')

const Product = mongoose.model('Product',{
    name: String,
    category: String
})

module.exports = Product