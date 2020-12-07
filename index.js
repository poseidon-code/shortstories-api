require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000
const URI = `mongodb+srv://everyone:${process.env.EVERYONE}@stories.l6tlk.mongodb.net/stories?retryWrites=true&w=majority`

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

// Routes
// get random story
app.get('/', async (req, res) => {
    try {
        const count = await Stories.countDocuments()
        const random = Math.floor(Math.random() * count)
        const story = await Stories.findOne().skip(random)
        res.send(story)
    } catch (error) {
        res.status(500).send(error)
    }
})

// get all stories
app.get('/stories', async (req, res) => {
    try {
        const stories = await Stories.find({})
        res.send(stories)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
