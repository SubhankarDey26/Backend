import { Router } from "express";
import { registerUser } from "../controllers/auth.Controller.js";
import { registervalidation } from "../validation/auth.validator.js";

const authRouter=Router()

authRouter.post("/register",registervalidation,registerUser)

export default authRouter