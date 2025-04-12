import { Request, Response } from "express";
export declare const getAllUrls: (req: Request, res: Response) => Promise<void>;
export declare const getUrlById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createUrl: (req: Request, res: Response) => Promise<void>;
export declare const createManyUrls: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateUrl: (req: Request, res: Response) => Promise<void>;
export declare const deleteUrl: (req: Request, res: Response) => Promise<void>;
export declare const redirectUrl: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
