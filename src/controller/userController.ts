import { Request, Response } from "express";
import { ZodError } from "zod";
import bcrypt from "bcrypt";
import User from "../model/userModel.js";
import { userSchema, loginSchema } from "../middlewares/validate.js";



export const postUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password } = userSchema.parse(req.body);
        const sanitizedEmail = email.toString().toLowerCase().trim();
        const storedHash = bcrypt.hashSync(password, 10);
        await User.create({
            firstName,
            lastName,
            email: sanitizedEmail,
            password: storedHash
        });
        res.status(201).json({
            message: "User created successfully",
            userData: {
                firstName,
                lastName,
                email
            }
        });
    } catch (error: any) {
        if (error instanceof ZodError) {
            return res.status(400).json({ errors: error.issues });
        }
        if (error.code === 11000) {
            return res.status(409).json({ error: "User already exists" });
        }
        else {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export const authUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = loginSchema.parse(req.body);
        const sanitizedEmail = email.toString().toLowerCase().trim();
        if (!email || !password) {
            return res.status(400).json({ error: "Missing email or password" });
        }
        const user = await User.findOne({ email: sanitizedEmail });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        res.status(200).json({
            message: "User logged in successfully",
            userData: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (error: any) {
        if (error instanceof ZodError) {
            return res.status(400).json({ errors: error.issues });
        } else {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}