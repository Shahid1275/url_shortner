"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const authRoutes = (0, express_1.Router)();
const role_1 = require("../controllers/role");
authRoutes.post('/signup', auth_1.signup);
authRoutes.post('/login', auth_1.login);
authRoutes.post('/user_role', role_1.user_role);
//user roles routes
authRoutes.get('/roles', auth_1.getUserRoles);
authRoutes.get('/roles/:id', auth_1.getUserRoleById);
authRoutes.put('/roles/:id', auth_1.updateUserRole);
authRoutes.delete('/roles/:id', auth_1.deleteUserRole);
//user routes
authRoutes.get('/users', auth_1.getUsers);
authRoutes.get('/users/:id', auth_1.getUserById);
authRoutes.put('/users/:id', auth_1.updateUser);
authRoutes.delete('/users/:id', auth_1.deleteUser);
exports.default = authRoutes;
//# sourceMappingURL=auth.js.map