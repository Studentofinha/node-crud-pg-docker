import express from "express";

const router=express.Router()

router.post("/user",createUsers);
router.get("/user",getAllUsers);
router.get("/user/:id",getUserById);
router.delete("/user/:id",deleteUser);

export default router