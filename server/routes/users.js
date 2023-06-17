import { Router } from "express";
import { login, signup, getuser } from "../controllers/users.js";

const router = Router();

router.get("/login", login)
router.post("/signup", signup)
router.get("/signup", getuser)

export default router;