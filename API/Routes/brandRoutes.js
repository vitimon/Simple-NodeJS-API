const router = require('express').Router()
const Brand = require('../Models/Brand')
const Product = require('../Models/Product')

router.get('/', async (req, res) => {
    try{
        const brands = await Brand.find()
        res.status(200).json(brands)

    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const brand = await Brand.findOne({_id: id})
        //TRATAR REQUISIÇÕES
        res.status(200).json(brand)

    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.post('/', async (req, res) => {
    const {name, product, category} = req.body
    const brand = {name, product, category}
    try {
        const brands = await Brand.find()
        const products = await Product.find()
        for(let i=0; i<brands.length; i++){
            if(brands[i].name == name & brands[i].product == product & brands[i],category == category){
                console.log("Already exists an entry with the same Category, Product,Brand")
                res.status(422).json({message: "Already exists an entry with the same Category, Product,Brand"})
                return
            }
        }
        await Brand.create(brand)
        console.log(`Creating Brand ${name}`)
        res.status(201).json({message: `Sucefull created ${name}`})
    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const {name, product} = req.body
    const brand = {name, product}
    try {
        await Brand.updateOne({_id: id},brand)
        console.log(`Updating Brand ${name}`)
        res.status(201).json({message: `Sucefull updated ${name}`})
    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Brand.deleteOne({_id: id})
        res.status(201).json({message: `Sucefull deleted`})
    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

module.exports = router