const mongoose = require('mongoose')

const Item = mongoose.model('Item',{
    category: String,
    product: String,
    brand: String,
    sales: [Number]
})

module.exports = Item