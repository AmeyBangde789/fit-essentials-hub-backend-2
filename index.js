import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import addToCart from './routes/addToCart.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser'

dotenv.config()
const app=express()
const port = process.env.PORT

app.use(express.json()); 
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
    origin:'https://mean-stack-project-frontend.onrender.com',
    credentials: true
}))
app.use("/api", addToCart);

const connectToMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connect to database...")
    } catch (error) {
        throw error
    }
}

app.listen(port,()=>{
    connectToMongoDB()
    console.log('connected to backend !')
   
}) 

