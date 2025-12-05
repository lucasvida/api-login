import express from "express";
import { postUser, authUser } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.get("/", authUser);
userRoute.post("/", postUser);

export default userRoute;
