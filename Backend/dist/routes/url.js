"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url_1 = require("../controllers/url");
const redirectUrl_1 = require("../controllers/redirectUrl");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
router.get('/redirect/:short_url', redirectUrl_1.redirectUrl);
router.get('/', auth_1.authMiddleware, url_1.getAllUrls);
router.get('/:id', auth_1.authMiddleware, url_1.getUrlById);
router.post('/', auth_1.authMiddleware, url_1.createUrl);
router.put('/:id', auth_1.authMiddleware, url_1.updateUrl);
router.post('/batch', auth_1.authMiddleware, url_1.createManyUrls);
router.delete('/:id', auth_1.authMiddleware, url_1.deleteUrl);
exports.default = router;
//# sourceMappingURL=url.js.map