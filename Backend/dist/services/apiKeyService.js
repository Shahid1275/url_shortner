"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteApiKey = exports.generateApiKey = void 0;
const client_1 = require("@prisma/client");
const nanoid_1 = require("nanoid");
const prisma = new client_1.PrismaClient();
const generateApiKey = async (userId) => {
    const existingKey = await prisma.api_key.findFirst({
        where: { user_id: userId },
    });
    if (existingKey) {
        throw new Error('API Key already exists for this user');
    }
    const newApiKey = await prisma.api_key.create({
        data: {
            api_key: (0, nanoid_1.nanoid)(40),
            user_id: userId,
        },
    });
    return newApiKey;
};
exports.generateApiKey = generateApiKey;
const deleteApiKey = async (userId) => {
    const existingKey = await prisma.api_key.findFirst({
        where: { user_id: userId },
    });
    if (!existingKey) {
        throw new Error('No API Key found for this user');
    }
    await prisma.api_key.delete({
        where: { api_key_id: existingKey.api_key_id },
    });
};
exports.deleteApiKey = deleteApiKey;
//# sourceMappingURL=apiKeyService.js.map