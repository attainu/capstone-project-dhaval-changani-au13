import express from "express";
import cors from "cors";
import session from "express-session";

require("dotenv").config();

import mongoInit from "./models/configs/mongo";
mongoInit();
const app = express();
const Port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: process.env.sessionSecret,
        cookie: { maxAge: 60000 }, // secure: true this to be put in production
    })
);

app.get("/health", (req, res) => {
    res.send("Health ok...");
});

import authRouter from "./routes/auth";

app.use("/api", authRouter);

app.listen(Port, (err, req, res) => {
    if (err) {
        console.log(err.message);
    }
    console.log(`app running on http://localhost:${Port}`);
});
