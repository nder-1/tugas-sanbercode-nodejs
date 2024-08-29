import express from 'express';
import categoryRoutes from './category.routes';
import productsController from '../controllers/products.controller';
import uploadMiddleware from '../middlewares/upload.middleware';
import uploadController from '../controllers/upload.controller';

const router = express.Router();

// Product routes
router.get('/products', productsController.findAll);
router.post('/products', productsController.create);
router.get('/products/:id', productsController.findOne);
router.put('/products/:id', productsController.update);
router.delete('/products/:id', productsController.delete);

// Category routes
router.use('/categories', categoryRoutes);

// Upload routes
router.post('/upload', uploadMiddleware.single('file'), uploadController.single);
router.post('/uploads', uploadMiddleware.array('files'), uploadController.multiple);

export default router;
