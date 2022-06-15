const router = require('express').Router()
const Brand = require('../Models/Brand')

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
    const {name, product} = req.body
    const brand = {name, product}
    try {
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