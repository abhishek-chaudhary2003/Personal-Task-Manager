import express, { Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./router/taskRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use("/", (req, res) => {
  res.json({
    message: "Task Manager API Running",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
