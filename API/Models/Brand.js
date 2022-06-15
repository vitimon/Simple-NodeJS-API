const mongoose = require('mongoose')

const Brand = mongoose.model('Brand',{
    name: String,
    product: String
})

module.exports = Brand