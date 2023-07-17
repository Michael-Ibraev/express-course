import {sequelize} from "../db";
import {DataTypes} from "sequelize";

export const Post = sequelize.define("Post",{
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING
    }
})