"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_role = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const user_role = async (req, res) => {
    try {
        const { role_name, description } = req.body;
        console.log(req.body);
        console.log(role_name);
        let user = await prisma_1.default.user_role.create({
            data: {
                role_name: role_name,
                description: description,
            },
        });
        if (user) {
            res.status(200).send({ message: "Role created successfully", user });
        }
        else {
            res.status(500).send({ message: "Unable to create role" });
        }
    }
    catch (err) {
        res.status(500).send({ error: err });
    }
};
exports.user_role = user_role;
//# sourceMappingURL=role.js.map