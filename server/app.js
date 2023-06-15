import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();

app.use(bodyParser.json({limit: '32mb', extended: 'true'}));
app.use(bodyParser.urlencoded({limit: '32mb', extended: 'true'}));
app.use(cors());

