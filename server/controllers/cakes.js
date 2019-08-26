require('../models/cake')
const mongoose = require('mongoose')
const Cake = mongoose.model("Cake");
const Rating = mongoose.model("Rating");

module.exports = {
    index: (req, res) => {
        Cake.find()
            .then(result => res.json({ results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    show: (req, res) => {
        Cake.findOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({ errors: err.errors  }));
    },
    create: (req, res) =>{
        Cake.create(req.body)
            .then(result => res.json({ results: result }))
            .catch( err => res.json({errors: err.errors}));
    },
    update: (req, res) => {
        Cake.findOneAndUpdate({_id: req.params.id},req.body,{useFindAndModify: false})
            .then(result => res.json({ results : result }))
            .catch(err => res.json({ errors: err.errors }));
    },
    destroy: (req,res) => {
        Cake.deleteOne({_id:req.params.id})
            .then(result => res.json({ results: result }))
            .catch(err => res.json({ errors: err.errors }));
    },
    createRating: (req,res) => {
        Rating.create(req.body)
        .then(result => Cake.findOneAndUpdate({_id: req.params.id}, {$push: {ratings:result}}, {useFindAndModify:false}))
        .then(results => res.json({results:results}))
            .catch(err => res.json({errors: err.errors}));
    }
}