import express from "express";
import {
  listSweets,
  addSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet,
} from "../controllers/sweetController.js";

import authMiddleware from "../middleware/auth.js";
import adminMiddleware from "../middleware/admin.js"; // role === admin

const sweetRouter = express.Router();

// Public
sweetRouter.get("/", listSweets);

// Admin
sweetRouter.post("/", authMiddleware, adminMiddleware, addSweet);
sweetRouter.delete("/:id", authMiddleware, adminMiddleware, deleteSweet);
sweetRouter.post("/:id/restock", authMiddleware, adminMiddleware, restockSweet);

// User purchase
sweetRouter.post("/:id/purchase", authMiddleware, purchaseSweet);

export default sweetRouter;
