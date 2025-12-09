import { rateLimit } from 'express-rate-limit';
import dotenv from "dotenv";

dotenv.config();

const limiter = rateLimit({
    windowMs: Number(process.env.MAX_TIME) * 60 * 1000 || 1 * 60 * 1000,
    max: Number(process.env.MAX_REQUESTS) || 100,
    message: "Too many requests from this IP, please try again later",
    statusCode: 429,
    standardHeaders: true,
    legacyHeaders: false
});

export default limiter;
