import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById } from "../controller/userController.js";

const router=express.Router()

router.post("/user",createUser);
router.get("/users",getAllUsers);
router.get("/user/:id",getUserById);
router.delete("/user/:id",deleteUser);

export default router