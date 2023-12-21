import express from "express";
import http from "http";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import router from "./router";

dotenv.config();

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log("server running on http://localhost:8080/")
})

const MONGO_URL =`${process.env.DB_URI}`

mongoose.Promise = Promise; // equal to global js Promise
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router())