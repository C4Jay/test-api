const express = require('express')
const router = express.Router()
const Criber = require('../models/criber')


// Get all
router.get('/', async(req, res) => {
    try {
        const cribers = await Criber.find()
        res.json(cribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//One
router.get('/:id', (req, res) => {
    res.send(req.params.id)

})

//Post one
router.post('/', (req, res) => {

})

//Patch one
router.patch('/:id', (req, res) => {

})
//Delete one
router.delete('/:id', (req, res) => {

})

module.exports = router;