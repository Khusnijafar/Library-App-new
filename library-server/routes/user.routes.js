var express = require('express')
var router = express.Router()
var User = require('../models/user.model')
const userController = require('./../controllers/user.controller');

router.post('/signup', userController.signup)
router.post('/login', userController.login)

// Add Data
router.post('/',(req, res) => {
    User.insertMany({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        role: 'user'
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

// Add Data
router.post('/',(req, res) => {
    User.insertMany({
        email: req.body.email,
        password: req.body.password,
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router