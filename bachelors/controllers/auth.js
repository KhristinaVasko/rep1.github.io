const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')


module.exports.login = async function (req, res) {
 const candidate = await User.findOne({
     email: req.body.email
 })

    if(candidate) {
        // Password check
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if(passwordResult){
        // Token generate
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 60* 60})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        }
        else {
            res.status(401).json({
                message: "Passwords is not matched. Try again"
            })
        }
    }
    else {
        // User is not exist, error
        res.status(404).json({
            message: 'User is not found'
        })
    }
}

module.exports.register = async function(req, res) {
    // email password
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        // Пользователь существует, нужно отправить ошибку
        res.status(409).json({
            message: 'User has already exist. Please, try again'
        })
    } else {
        // Нужно создать пользователя
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
