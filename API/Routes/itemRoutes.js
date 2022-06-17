const router = require('express').Router()
const Item = require('../Models/Item')

router.get('/', async (req, res) => {
    try{
        const items = await Item.find()
        res.status(200).json(items)

    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const item = await Item.findOne({_id: id})
        res.status(200).json(item)

    }catch(error){
        console.log("ERROR FOUND")
        res.status(500.).json({error: error})
    }
})

router.post('/', async (req, res) => {
    const {category,product,brand,sales} = req.body
    const item = {category,product,brand,sales}
    try {
        const items = await Item.find()
        for(let i = 0; i < items.length; i++){
            if(items[i].category == category & items[i].product == product & items[i].brand == brand){
                console.log(`There's already a item with the same category, product and brand`)
                res.status(422).json({message:`There's already an item with ${category}-${product}-${brand}`})
                return
            }
        }
        await Item.create(item)
        console.log(`Creating in the Category ${category}`)
        res.status(201).json({message: `Sucefull created `})
    }catch(error){
        console.log(`ERROR FOUND POSTING ${item.brand}`)
        res.status(500.).json({error: error})
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const {category,product,brand,sales} = req.body
    const item = {category,product,brand,sales}
    try {
        await Item.updateOne({_id: id},item)
        console.log(`Updating Item `)
        res.status(201).json({message: `Sucefull updated`})
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