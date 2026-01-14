import { NextFunction, Request, Response } from "express";

export const methodNotAllowed = (req: Request, res: Response, next: NextFunction) => {
    const metodo = req.method;
    res.status(405).json({ error: `Method ${metodo} não permitido para essa rota` });
}
