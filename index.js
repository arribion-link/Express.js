import express from 'express';
import mongoose from 'mongoose';
import dotenv, { configDotenv } from 'dotenv';

const app = express();
//load environment variables
dotenv.config(configDotenv)


const port = process.env.PORT;
const mongoUrl =process.env.MONGO_URL;

//connecting mongoose with the server
mongoose.connect(mongoUrl)
    .then(() => {
        console.log("Database connected successfully");
        app.listen(port, () => {
            console.log(`app running on port:${port}`);
        })
    }).catch((err) => {
        console.log("error occured while connecting to databasse", err);
});

//query desired data


//close the database

// mongoose.disconnect
//     .then(() => {
//         console.log("database disconnected successfully");
//     }).catch((err) => {
//         console.log("erro occured while trying to close the datase", err);
//     });