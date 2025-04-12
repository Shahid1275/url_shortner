import { Request, Response } from 'express';
interface AuthenticatedRequest extends Request {
    userId?: number;
}
export declare const generateApiKeyController: (req: AuthenticatedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteApiKeyController: (req: AuthenticatedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
