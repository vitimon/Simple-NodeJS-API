const mongoose = require('mongoose')

const Brand = mongoose.model('Brand',{
    name: String,
    product: String,
    category: String
})

module.exports = Brand