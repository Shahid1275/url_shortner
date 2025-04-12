import { Request, Response, NextFunction } from 'express';
interface AuthenticatedRequest extends Request {
    userId?: number;
}
export declare const authMiddleware: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
