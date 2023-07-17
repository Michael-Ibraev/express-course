import {Request, Response, Router} from "express";
import {Post} from "./models/Post";
import {PostController} from "./postController";

export const router = Router();

router.post("/posts", PostController.create);
router.post("/get");
router.post("/get/:id");
router.post("/put");
router.post("/delete/:id");


