"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiKeyController_1 = require("../controllers/apiKeyController");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.post('/generate', auth_1.authMiddleware, apiKeyController_1.generateApiKeyController);
router.delete('/delete', auth_1.authMiddleware, apiKeyController_1.deleteApiKeyController);
exports.default = router;
//# sourceMappingURL=apiKeyRoutes.js.map