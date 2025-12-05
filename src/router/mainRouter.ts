import express from "express";
import userRoute from "./userRoute.js";

const mainRouter = express.Router();

mainRouter.use("/v1/users", userRoute);

export default mainRouter;