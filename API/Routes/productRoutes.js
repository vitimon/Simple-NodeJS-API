const router = require('express').Router()
const Product = require('../Models/Product')

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
        await Product.create(product)
        console.log(`Creating Product ${name}`)
        res.status(201).json({message: `Sucefull created ${name}`})
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
        await Product.updateOne({_id: id},product)
        console.log(`Updating Product ${name}`)
        res.status(201).json({message: `Sucefull updated ${name}`})
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