import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  toggleTaskStatus,
  updateTask,
} from "../controllers/taskController.js";

const router = Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.patch("/:id/toggle", toggleTaskStatus);
router.delete("/:id", deleteTask);

export default router;
