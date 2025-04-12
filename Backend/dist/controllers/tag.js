"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTag = exports.updateTag = exports.createTag = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createTag = async (req, res) => {
    try {
        const { user_id, tag_name } = req.body;
        if (!user_id) {
            return res.status(400).json({ error: 'User ID is required' });
        }
        const newTag = await prisma.url_tag.create({
            data: {
                user_id,
                tag_name,
            },
        });
        res.status(201).json(newTag);
    }
    catch (error) {
        console.error('Error creating tag:', error);
        res.status(500).json({ error: 'Error creating tag' });
    }
};
exports.createTag = createTag;
// Update an existing Tag
const updateTag = async (req, res) => {
    const { id } = req.params;
    const { tag_name } = req.body;
    try {
        const updatedTag = await prisma.url_tag.update({
            where: { tag_id: parseInt(id) },
            data: {
                tag_name,
                updated_at: new Date(), // Update timestamp
            },
        });
        res.status(200).json(updatedTag);
    }
    catch (error) {
        console.error('Error updating tag:', error);
        res.status(500).json({ error: 'Failed to update tag' });
    }
};
exports.updateTag = updateTag;
// Soft delete a Tag
const deleteTag = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.url_tag.update({
            where: { tag_id: parseInt(id) },
            data: {
                is_deleted: true,
                deleted_at: new Date(),
            },
        });
        res.status(204).end();
    }
    catch (error) {
        console.error('Error deleting tag:', error);
        res.status(500).json({ error: 'Failed to delete tag' });
    }
};
exports.deleteTag = deleteTag;
//# sourceMappingURL=tag.js.map