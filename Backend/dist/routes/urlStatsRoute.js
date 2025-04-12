"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const urlStats_1 = require("../controllers/urlStats");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
router.get('/:url_id', auth_1.authMiddleware, urlStats_1.getUrlStatsByUrlId);
exports.default = router;
//# sourceMappingURL=urlStatsRoute.js.map