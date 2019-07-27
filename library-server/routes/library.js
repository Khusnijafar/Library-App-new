var express = require('express')
var router = express.Router()
var Library = require('../models/library')

// Get list data
router.get('/', (req, res) => {
    Library.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
});

// Add Data
router.post('/', (req, res) => {
    Library.insertMany({
        id: req.body.id,
        title: req.body.title,
        image: req.body.image,
        writer: req.body.writer,
        category: req.body.category,
        location: req.body.location,
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

// Edit Data
router.put('/:id', (req, res) => {
    let id = req.params.id
    Library.findOneAndUpdate({id: id}, {
        title: req.body.title,
        image: req.body.image,
        writer: req.body.writer,
        category: req.body.category,
        location: req.body.location,
    }, {new: true}).then(data => {
        if(data){
            res.json(
                data
            )
        } else {
            res.json({
                error: true,
                message:  `updating data has been failed id : ${id} not found`
            })
        }
    }).catch(err=>{
        res.json({
            error:true,
            message: err.message
        })
    })
})

// Delete Data
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Library.findOneAndDelete({ id: id }).then(item => {
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