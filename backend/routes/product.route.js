import express from 'express';

import  { createProduct, deleteProdcut, updateProduct, getProducts } from '../controllers/product.controller.js';
const router = express.Router();


router.get("/", getProducts)
router.post("/", createProduct);
router.delete("/:id", deleteProdcut);
router.put("/:id", updateProduct);


export default router;

