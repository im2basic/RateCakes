// --------------SET UP ROUTES---------------
const mongoose = require('mongoose'),
    actions = require('../controllers/cakes')

module.exports = (app) => {
    app.get('/index', (req,res) => actions.index(req,res))

    app.get('/:id', (req,res) => actions.show(req,res) )

    app.post('/create', (req,res) => actions.create(req,res))

    app.post('/update/:id', (req,res) => actions.update(req,res))

    app.post('/create/rating/:id', (req,res) => actions.createRating(req,res))

    app.delete('/destroy/:id', (req,res) => actions.destroy(req,res))
}