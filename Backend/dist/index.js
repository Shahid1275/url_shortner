"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const tagRoutes_1 = __importDefault(require("./routes/tagRoutes"));
const apiKeyRoutes_1 = __importDefault(require("./routes/apiKeyRoutes"));
const routes_1 = __importDefault(require("./routes"));
const prisma_1 = __importDefault(require("./lib/prisma")); // Import Prisma client
const dotenv_1 = __importDefault(require("dotenv")); // Use ESM import for dotenv
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
// Routes
app.use("/api", tagRoutes_1.default);
app.use("/api-key", apiKeyRoutes_1.default);
app.use("/api", routes_1.default);
// Health check endpoint
app.get("/health", async (req, res) => {
    try {
        await prisma_1.default.$queryRaw `SELECT 1`;
        res.status(200).json({ status: "healthy" });
    }
    catch (error) {
        res.status(500).json({ status: "unhealthy" });
    }
});
// Connect to the database and start the server
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
async function startServer() {
    try {
        await prisma_1.default.$connect();
        console.log("Database connection established");
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
    catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1);
    }
}
startServer();
//# sourceMappingURL=index.js.map