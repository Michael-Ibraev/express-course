import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import {sequelize} from "./db";
import {router } from "./router";
import {Post} from "./models/Post";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", router);

async function startApp(){
    try {
        sequelize.authenticate()
            .then(() => {
                console.log("Connection has been established successfully");
            })
            .catch((err) => {
                console.log("Unable to connect to the database");
            });

        sequelize.sync()
            .then(() => {
                console.log("All models were synchronized successfully");
            })
            .catch((err) => {
                console.log(err);
            })
        app.listen(process.env.APP_PORT, () => console.log("server started"));
    } catch (e){
        console.log(e);
    }
}

startApp();