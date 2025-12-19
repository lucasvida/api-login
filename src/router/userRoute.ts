import express from "express";
import { postUser, authUser, updatePasswordUser, deleteUser } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.post("/auth", authUser);
userRoute.post("/", postUser);
userRoute.patch("/:id", updatePasswordUser);
userRoute.delete("/:id", deleteUser);

export default userRoute;
