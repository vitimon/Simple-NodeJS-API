const router = require('express').Router()
const Category = require('../Models/Category')

router.get('/', async (req, res) => {
    try{
        const categories = await Category.find()
        res.status(200).json(categories)

    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const category = await Category.findOne({_id: id})
        res.status(200).json(category)

    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.post('/', async (req, res) => {
    const {name} = req.body
    const category = {name}
    try {
        const categories = await Category.find()
        for(let i = 0; i < categories.length; i++){
            if(categories[i].name == name){
                console.log(`There's already a category named ${name}`)
                res.status(422).json({message:`There's already a category named ${name}`})
                return
            }
        }
        await Category.create(category)
        console.log(`Creating Category ${name}`)
        res.status(201).json({message: `Sucefull created ${name}`})
    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const {name} = req.body
    const category = {name}
    try {
        const categories = await Category.find()
        for(let i = 0; i < categories.length; i++){
            if(categories[i].name == name){
                console.log(`There's already a category named ${name}`)
                res.status(422).json({message:`There's already a category named ${name}`})
                return
            }
        }
        await Category.updateOne({_id: id},category)
        console.log(`Updating Category ${name}`)
        res.status(201).json({message: `Sucefull updated ${name}`})
    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Category.deleteOne({_id: id})
        res.status(201).json({message: `Sucefull deleted`})
    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

module.exports = router