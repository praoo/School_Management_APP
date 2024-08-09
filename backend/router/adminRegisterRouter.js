import express from "express";
import { adminSignIn } from "../controllers/usersController.js";
import { adminRegister } from "../controllers/adminRegisterController.js";

const router = express.Router();

router.post('/signin', adminSignIn);   // This is for admin sign-in
router.post('/admin', adminRegister); // This is for admin registration

export default router;