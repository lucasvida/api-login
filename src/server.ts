import express, { NextFunction, Request, Response } from "express";
import { rateLimit } from 'express-rate-limit';
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mainRouter from "./router/mainRouter.js";
import connectDB from "./config/connectDb.js";


dotenv.config();
await connectDB();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/", mainRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 2,
    message: "Too many requests from this IP, please try again later",
    statusCode: 429,
    standardHeaders: true,
    legacyHeaders: false
});

app.use(limiter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} - http://localhost:${port}`);
});