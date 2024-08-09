import express from "express";
import { markAttendance, getAllAttendance } from "../controllers/attendanceController.js";

const router = express.Router();

router.get('/getall', getAllAttendance);
router.post('/', markAttendance);

export default router;