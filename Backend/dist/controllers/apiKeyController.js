"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteApiKeyController = exports.generateApiKeyController = void 0;
const apiKeyService_1 = require("../services/apiKeyService");
const generateApiKeyController = async (req, res) => {
    const userId = req.userId;
    // console.log("userId:" ,userId);
    if (userId === undefined) {
        return res.status(400).json({ error: 'User ID not found in request' });
    }
    try {
        const apiKey = await (0, apiKeyService_1.generateApiKey)(userId.toString());
        return res.status(201).json({ apiKey });
    }
    catch (err) {
        return res.status(400).json({ error: err.message });
    }
};
exports.generateApiKeyController = generateApiKeyController;
const deleteApiKeyController = async (req, res) => {
    const userId = req.userId;
    if (userId === undefined) {
        return res.status(400).json({ error: 'User ID not found in request' });
    }
    try {
        await (0, apiKeyService_1.deleteApiKey)(userId.toString());
        return res.status(204).send();
    }
    catch (err) {
        return res.status(400).json({ error: err.message });
    }
};
exports.deleteApiKeyController = deleteApiKeyController;
//# sourceMappingURL=apiKeyController.js.map