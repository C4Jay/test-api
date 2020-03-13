const mongoose = require('mongoose')

const criberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    subscribedTo: {
        type: String,
        required: true

    },
    Data: {
        type: Date,
        required: true,
        default: Date.now

    }
})

module.exports = mongoose.model('Criber', criberSchema)