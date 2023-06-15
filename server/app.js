import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import storyRoutes from './routes/stories.js'

const app = express();

app.use(bodyParser.json({limit: '32mb', extended: 'true'}));
app.use(bodyParser.urlencoded({limit: '32mb', extended: 'true'}));
app.use(cors());
app.use("/stories", storyRoutes);

const MONGO_URI = "mongodb+srv://alicanaca7:clusterPass@cluster0.xzavplq.mongodb.net/";
const PORT = process.env.PORT || 5000;

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

