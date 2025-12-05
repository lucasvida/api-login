import express from "express";
import dotenv from "dotenv";
import mainRouter from "./router/mainRouter.js";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/connectDb.js";
dotenv.config();
await connectDB();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/", mainRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} - http://localhost:${port}`);
});