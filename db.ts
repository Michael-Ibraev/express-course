import {Sequelize} from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(String(process.env.DB_NAME), String(process.env.DB_USERNAME),
    String(process.env.DB_PASSWORD), {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        define: {
            timestamps: false
        }
    })