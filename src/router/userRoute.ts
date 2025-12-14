import express from "express";
import { postUser, authUser } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.post("/auth", authUser);
userRoute.post("/create", postUser);

export default userRoute;
