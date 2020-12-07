require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000
const URI = `mongodb+srv://pritam0605:${process.env.PASSWORD}@stories.l6tlk.mongodb.net/stories?retryWrites=true&w=majority`

app.use(cors())
app.use(express.json())

// Connect MongoDB Atlas' stories Database
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database Connected...')
    })
    .catch((err) => console.log(err))

// Stories Schema
const Schema = mongoose.Schema
const StoriesSchema = new Schema({
    title: String,
    author: String,
    story: String,
    moral: String,
})

const Stories = mongoose.model('stories', StoriesSchema)

// api Routes
app.get('/', (req, res) => {
    Stories.countDocuments().exec((err, count) => {
        const random = Math.floor(Math.random() * count)

        Stories.findOne()
            .skip(random)
            .exec((err, data) => {
                if (err) console.log(err)
                else res.send(data)
            })
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
