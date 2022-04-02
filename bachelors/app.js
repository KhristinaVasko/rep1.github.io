const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const positionRoutes = require('./routes/position')
const orderRoutes = require('./routes/order')
const categoryRoutes = require('./routes/category')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)
    .then(() => console.log("Mongodb Connected"))
    .catch(error => console.log(error))

const app = express()
app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/position', positionRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/category', categoryRoutes)


module.exports = app
