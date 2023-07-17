import {Post} from "./models/Post";
import {Request, Response} from "express";

export class PostController{
    static async create(req:Request, res:Response){
        try{
            const {author, title, content, picture} = req.body;
            const post = await Post.create({author, title, content, picture});
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    //25:20

}