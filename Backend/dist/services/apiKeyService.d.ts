export declare const generateApiKey: (userId: string) => Promise<{
    user_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    is_deleted: boolean;
    api_key: string;
    api_key_id: number;
    expires_at: Date | null;
}>;
export declare const deleteApiKey: (userId: string) => Promise<void>;
