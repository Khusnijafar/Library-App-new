var express = require('express')
var router = express.Router()
var Loanbook = require('../models/loanbook')

// Get list data
router.get('/', (req, res) => {
    Loanbook.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
});

// Add Data
router.post('/', (req, res) => {
    Loanbook.insertMany({
        cardNumber: req.body.cardNumber,
        id: req.body.id,
        expiredDate: req.body.expiredDate,
        forfeit: req.body.forfeit,
        status: req.body.status,
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

// Delete Data
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Loanbook.findOneAndDelete({ id: id }).then(item => {
       if(item){
           res.json({
               status: "SUCCESS",
               data: item
           })
       } else {
           res.json({
               error: true,
               message: `deleting data has been failed id : ${id} not found`
           })
       }
  }).catch(err=>{
      res.json({
          error: true,
          message: err.message
        })
    })
})

module.exports = router