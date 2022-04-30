const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    order: {
        type: Number,
        required: true,
    },
    list: [
        {
            name: {
                type: String
            },
            quality: {
                type: Number
            },
            cost: {
                type: Number
            }
        }
    ],
    password: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('orders', orderSchema)
