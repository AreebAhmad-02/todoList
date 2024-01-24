import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const connection = () => { 
    const    MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-sl0z2vh-shard-00-00.u0yv2iy.mongodb.net:27017,ac-sl0z2vh-shard-00-01.u0yv2iy.mongodb.net:27017,ac-sl0z2vh-shard-00-02.u0yv2iy.mongodb.net:27017/?ssl=true&replicaSet=atlas-e60djo-shard-0&authSource=admin&retryWrites=true&w=majority`;
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

