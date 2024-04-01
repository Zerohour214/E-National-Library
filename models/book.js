import mongoose from "mongoose"
// import { author } from '../models/author.js'

var author = require('../models/author.js')

const bookSchema = mongoose.Schema(
    {
        bookname: {
            type: String,
            required: [true,"Please enter book name"],
        },
        author:{
            // type: mongoose.Schema.Types.ObjectId,
            // ref: 'authorName',
            // required: [true,"Please enter book author"],
            type: [author.authorName],
        },
        publisher: {
            type: String,
            required: [true,"Please enter book publisher"],
        },
        language: {
            type: String,
            required: [true,"Please enter book language"],
        },
        page: {
            type: Number,
        },
        description: {
            type: String,
            default: "none",
        },
        image: {
            type: Image,
            //required: [true,"Please enter book image"],
            //default: put a pic as default for book
        },
        bookTag: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'booktag',
            required: [true, "Please enter at least one tag"],
            default: null
        },
        rating: {
            type: Number,
            required: [true]
        },
        bowworedTime: {
            type: Number,
            required: [true]
        },
        note: {
            type: String,
            default: "none",
        },
        availableStatus: {
            type: Number,
            default: 1,
        },
    }
)

const tag = mongoose.Schema(
    {
        tagName:{
            type: String,
        },
    }
)

// find best book
// bookSchema.static.findTop = function (callback) {
//     this.sort('-borrowedTime') 
//         .exec(callback);
// }

const booktag = mongoose.model('booktag', tag)
module.exports = mongoose.model('book', bookSchema)

