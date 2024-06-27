import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"
import { config } from "dotenv";

import {documentRoutes} from "./routes/documentRoutes.js";

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, // access-control-allow-credentials:true
    optionSuccessStatus: 200
};


config();

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/document', documentRoutes);

async function main () {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        app.listen(5000, () => {
            console.log("Fetched - DB Connected");
        });
    } catch (exception) {
        console.error("Error Connecting to the DB", exception);
    }
};

main().then(r => console.log("Running API on Port 5000"));