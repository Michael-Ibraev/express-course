import {Request, Response} from "express";
import {Post} from "./models/Post";

class PostService {
    async create(post: any){
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAll(req: Request, res: Response){
        try{
            const posts = await Post.findAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req: Request, res: Response){
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

    async update(req: Request, res: Response){
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

    async delete(req: Request, res: Response){
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

export default new PostService();