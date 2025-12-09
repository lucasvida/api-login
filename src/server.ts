import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mainRouter from "./router/mainRouter.js";
import connectDB from "./config/connectDb.js";
import limiter from "./middlewares/rateLimiter.js";

dotenv.config();
await connectDB();

const app = express();
const port = process.env.PORT || 3333;

app.set('trust proxy', 1);

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(limiter);

app.use("/", mainRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} - http://localhost:${port}`);
});