import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, // access-control-allow-credentials:true
    optionSuccessStatus: 200
};


function main () {
    app.listen(5000, () => {
        console.log("AlleSys: Fetch - DB Connected and Listening on Port 5000");
    });
};

main();