const express = require('express')
const router = express.Router()

module.exports = router

// Get all
router.get('/', (req, res) => {
    console.log("Hey")

})

//One
router.get('/:id', (req, res) => {

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
