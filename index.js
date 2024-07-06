import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 5000;
const URI = `mongodb+srv://everyone:${process.env.EVERYONE}@stories.l6tlk.mongodb.net/stories?retryWrites=true&w=majority`;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.disable("x-powered-by");

// Connect MongoDB Atlas' stories Database
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => console.log(err));

// Stories Schema
const Schema = mongoose.Schema;
// prettier-ignore
const StoriesSchema = new Schema({
    title   : String,
    author  : String,
    story   : String,
    moral   : String,
});

const Stories = mongoose.model("stories", StoriesSchema);

// Routes
// get random story
app.get("/", async (_, res) => {
    try {
        const count = await Stories.countDocuments();
        const random = Math.floor(Math.random() * count);
        const story = await Stories.findOne().skip(random);
        return res.status(200).send(story);
    } catch (error) {
        if (process.env.NODE_ENV == "development") {
            console.error(error);
            return res.status(500).send(error);
        } else {
            return res.status(500);
        }
    }
});

// get all stories
app.get("/stories", async (_, res) => {
    try {
        const stories = await Stories.find({});
        return res.status(200).send(stories);
    } catch (error) {
        if (process.env.NODE_ENV == "development") {
            console.error(error);
            return res.status(500).send(error);
        } else {
            return res.status(500);
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
