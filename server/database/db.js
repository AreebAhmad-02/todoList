import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const connection = () => { 
    const    MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.u0yv2iy.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully...');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected...');
    });

    mongoose.connection.on('error', (error) => {
        console.log('MongoDB connection error...', error.message);
    })
}


export default connection;

