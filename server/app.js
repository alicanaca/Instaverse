import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import storyRoutes from './routes/stories.js'
import userRoutes from './routes/users.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: '32mb', extended: 'true'}));
app.use(bodyParser.urlencoded({limit: '32mb', extended: 'true'}));
app.use(cors());
app.use("/stories", storyRoutes);
app.use("/users", userRoutes);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        app.listen(PORT, () => { console.log(`Server running on port number ${PORT}`) })
    } catch (error) {
        console.log('Connection failed', error.message)
    }
}

connectDB();

mongoose.connection.on("open", () => {
    console.log("Connection to database is successful")
})
mongoose.connection.on("error", (err) => {
    console.log(err)
})

