import {Post} from "./models/Post";
import {Request, Response} from "express";
import PostService from "./postService";

export class PostController{
    static async create(req:Request, res:Response){
        try{
            const post = await PostService.create(req.body);
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    static async getAll(req: Request, res: Response){
        try{
            const posts = await Post.findAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    static async getOne(req: Request, res: Response){
        try{
            const {id} = req.params;
            if(!id){
                res.status(400).json({message: "id не указан"});
            }
            const post = await Post.findByPk(id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    static async update(req: Request, res: Response){
        try{
            const post = req.body;
            if(!post.id){
                res.status(400).json({message: "id не указан"});
            }
            const updatedPost = await Post.update(post, {
                where: {
                    id: post.id
                }
            })
            console.log(updatedPost);
            return res.json(await Post.findByPk(post.id));
        } catch (e) {
            res.status(500).json(e);
        }
    }

    static async delete(req: Request, res: Response){
        try{
            const {id} = req.params;
            if(!id){
                res.status(400).json({message: "id не указан"});
            }
            const post = await Post.destroy({
                where: {
                    id: id
                },
                force: true
            });
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}