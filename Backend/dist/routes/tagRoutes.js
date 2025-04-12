"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tag_1 = require("../controllers/tag");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.post('/tags', auth_1.authMiddleware, tag_1.createTag);
router.put('/tags/:id', auth_1.authMiddleware, tag_1.updateTag);
router.delete('/tags/:id', auth_1.authMiddleware, tag_1.deleteTag);
exports.default = router;
//# sourceMappingURL=tagRoutes.js.map