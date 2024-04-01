import mongoose from "mongoose"

var book = require('../models/book.js')
var User = require('../models/user.js')

const orderSchema = mongoose.Schema(
    {
        userName: {
            type: [User.email],
            require: [true,'Please enter username'],
        },
        bookName: {
            type: [book.bookName],
            require: [true,'Please enter bookname'],
        },
        borrowDate: {
            type: Date,
            require: [true,'Please enter borrow date'],
        },
        returnDate: {
            type: Date,
            require: [true,'Please enter return date'],
        },
    }
)

const order = mongoose.model('order', orderSchema)

module.exports = order