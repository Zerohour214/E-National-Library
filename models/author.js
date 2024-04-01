import mongoose from "mongoose"

const authorSchema = mongoose.Schema(
    {
        authorName: {
            type: String,
            required: [true,'Please enter author name']
        },
        authorImage: {
            type: Image,
            //default: choose 1 pic as default for author
        },
    }
)

const author = mongoose.model('author', authorSchema)

module.exports = author
