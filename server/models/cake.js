// -----------SET UP MODELS------------------
const mongoose = require('mongoose')

const RatingSchema = new mongoose.Schema({
    rating:{
        type: Number,
        min: 1,
        max: 5
    },
    comment:{
        type: String,
        required: [true, "Please make a comment!"],
        minlength: [10, "Needs more info"],
        maxlength:[50, "TLDR"]
    }
},{timestamps:true})

const CakesSchema = new mongoose.Schema({
    //--Created model/Change to accomodate needs--
    baker:{
        type: String,
        required: [true, "A cake must have a baker"]
    },
    imgUrl: {
        type: String,
        required: [true, "An image url must be provided."]
    },
    ratings: [RatingSchema]
//--CreatedAT vvv UpdatedAt--
},{timestamps:true})


//Action is what your model will be called in your controller
//              Collection Name vvv
const Rating = mongoose.model('Rating',RatingSchema)
const Cake = mongoose.model('Cake', CakesSchema)

