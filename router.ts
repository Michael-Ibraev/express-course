import {Request, Response, Router} from "express";
import {Post} from "./models/Post";
import {PostController} from "./postController";

export const router = Router();

router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts", PostController.update);
router.delete("/posts/:id", PostController.delete);


