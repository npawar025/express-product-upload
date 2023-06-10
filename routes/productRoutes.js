import express from "express";

const router = express.Router();

import {
  createProduct,
  getAllProducts,
} from "../controllers/productController.js";
import { uploadProductImage } from "../controllers/uploadsController.js";

router.route("/").post(createProduct).get(getAllProducts);
router.route("/uploads").post(uploadProductImage);

export default router;
