"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const url_1 = __importDefault(require("./url"));
const urlStatsRoute_1 = __importDefault(require("./urlStatsRoute"));
const rootRouter = (0, express_1.Router)();
const apiKeyRoutes_1 = __importDefault(require("./apiKeyRoutes"));
rootRouter.use('/api-key', apiKeyRoutes_1.default);
rootRouter.use('/auth', auth_1.default);
rootRouter.use('/urls', url_1.default);
rootRouter.use('/stats', urlStatsRoute_1.default);
exports.default = rootRouter;
//# sourceMappingURL=index.js.map