import { Router } from "express";

import { signUpUser, userLogin } from "../../controller/user-controller.js";
import { uploadFile } from "../../controller/image-controller.js";
import { getImage } from "../../controller/image-controller.js";
import upload from "../../utils/upload.js";
import { authenticateToken } from "../../controller/jwt-controller.js";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../../controller/post-controller.js";

const router = Router();

router.post("/signup", signUpUser);
router.post("/login", userLogin);
router.post("/file/upload", upload.single("file"), uploadFile);
router.post("/create", authenticateToken, createPost);

router.put("/update/:id", authenticateToken, updatePost);

router.get("/file/:filename", getImage);
router.get("/posts", authenticateToken, getAllPosts);
router.get("/post/:id", authenticateToken, getPost);

router.delete("/delete/:id", authenticateToken, deletePost);

export default router;
