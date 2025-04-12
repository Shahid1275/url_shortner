import { Request, Response } from "express";
export declare const redirectUrl: (req: Request, res: Response) => Promise<void | Response<any, Record<string, any>>>;
