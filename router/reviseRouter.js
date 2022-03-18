import express from "express";
import { getCalls, createCalls } from "../controller/reviseController.js";

const router = express.Router();

router.get("/", getCalls);
router.post("/", createCalls);

export default router;
