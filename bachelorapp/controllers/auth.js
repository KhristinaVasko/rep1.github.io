const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')


module.exports.login = async function(req, res) {
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      // Token generation
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60})

      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      // Password didn't match
      res.status(401).json({
        message: 'Wrong password/ Please, try again.'
      })
    }
  } else {
    res.status(404).json({
      message: 'There is no user with this data.'
    })
  }

  }
  
  
  module.exports.register = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
      res.status(409).json({
        message: 'This email is already exist. Please, try again'
      })
    } else {
      const salt = bcrypt.genSaltSync(10)
      const password = req.body.password
      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt)
      })

       try {
       await user.save()
        res.status(201).json(user)
        } catch(e) {
        errorHandler(res, e)
        }

    }
  }