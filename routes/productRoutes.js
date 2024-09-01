import express from 'express';
const router = express.Router();
import { GetProducts, CreateProduct, GetProduct } from '../controllers/productController.js';

// Endpoints
router.get('/', GetProducts);
router.get('/:id', GetProduct);
router.post('/', CreateProduct);

export default router;