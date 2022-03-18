import express from "express";
import {
  getFood,
  createFood,
  getFoodId,
  updateFood,
  deleteFood,
} from "../controller/foodController.js";

const router = express.Router();

router.get("/", getFood);
router.post("/", createFood);
router.get("/", getFoodId);
router.put("/update", updateFood);
router.delete("/delete", deleteFood);

export default router;
