"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlStatsByUrlId = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUrlStatsByUrlId = async (req, res) => {
    const { url_id } = req.params;
    console.log(`url_id: ${url_id}`);
    try {
        const urlStats = await prisma.url_click.findMany({
            where: {
                url_id: url_id,
                is_deleted: false,
            },
            orderBy: {
                created_at: 'desc',
            },
        });
        if (!urlStats || urlStats.length === 0) {
            return res.status(200).json({ message: "No statistics found for this URL." });
        }
        console.log(urlStats, "--------------------------------\n");
        return res.status(200).json(urlStats);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to fetch URL statistics." });
    }
};
exports.getUrlStatsByUrlId = getUrlStatsByUrlId;
//# sourceMappingURL=urlStats.js.map