import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export default function isAuthenticated(
    req: Request, res: Response, next: NextFunction 
): void {
    const authHeader = req.headers.authorization;

    if (!authHeader)
    throw new AppError('JWT Token is missing.');

    const [, token] = authHeader.split(' ');

    try {
        const decodedToken = verify(token, process.env.JWT_SECRET);
        return next();
    } catch(e) {
        throw new AppError('Invalid JWT Token.')
    }
}