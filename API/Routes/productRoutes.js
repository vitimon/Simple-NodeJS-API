const router = require('express').Router()
const Product = require('../Models/Product')
const Category = require('../Models/Category')

router.get('/', async (req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products)

    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const product = await Product.findOne({_id: id})
        //TRATAR REQUISIÇÕES
        res.status(200).json(product)

    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.post('/', async (req, res) => {
    const {name,category} = req.body
    const product = {name,category}

    try {
        const products = await Product.find()
        for(let i = 0; i < products.length; i++){
            if(products[i].name == name & products[i].category == product.category){
                console.log(`There's already a product named ${name} in the ${category} category.`)
                res.status(422).json({message:`There's already a product named ${name} in the ${category} category.`})
                return
            }
        }
        const categories = await Category.find()
        for(let i=0; i<categories.length; i++){
            if(categories[i].name == category){
                await Product.create(product)
                console.log(`Creating Product ${name}`)
                res.status(201).json({message: `Sucefull created ${name}`})
                return
            }
        }
        console.log(`Category ${category} not found`)
        res.status(421).json({message: `Category ${category} not found`})
    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const {name,category} = req.body
    const product = {name,category}
    try {
        const products = await Product.find()
        for(let i = 0; i < products.length; i++){
            if(products[i].name == name & products[i].category == product.category){
                console.log(`There's already a product named ${name} in the ${category} category.`)
                res.status(422).json({message:`There's already a product named ${name} in the ${category} category.`})
                return
            }
        }
        const categories = await Category.find()
        for(let i=0; i<categories.length; i++){
            if(categories[i].name == category){
                await Product.create(product)
                console.log(`Creating Product ${name}`)
                res.status(201).json({message: `Sucefull created ${name}`})
                return
            }
        }
        console.log(`Category ${category} not found`)
        res.status(421).json({message: `Category ${category} not found`})
    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Product.deleteOne({_id: id})
        res.status(201).json({message: `Sucefull deleted`})
    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

module.exports = router