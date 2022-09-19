import express from "express";

import { getUsers, Register, Login, confirmLogin } from "../controllers/Users.js";

const router = express.Router();

router.get('/users', getUsers);
router.post('/register', Register);
router.post('/login', Login);
router.get('/loginCheck', confirmLogin);

export default router;