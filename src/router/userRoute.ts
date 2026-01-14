import express from "express";
import { postUser, authUser, updatePasswordUser, deleteUser } from "../controller/userController.js";
import { methodNotAllowed } from "../middlewares/methodNotAllowed.js";
const userRoute = express.Router();

userRoute.route("/auth")
    .post(authUser)
    .all(methodNotAllowed);

userRoute.route("/")
    .post(postUser)
    .all(methodNotAllowed);

userRoute.route("/:id")
    .patch(updatePasswordUser)
    .delete(deleteUser)
    .all(methodNotAllowed);

export default userRoute;
