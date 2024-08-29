import express from 'express';
import categoryController from '../controllers/category.controller';

const router = express.Router();

router.post('/', categoryController.create);
router.get('/', categoryController.findAll);
router.get('/:id', categoryController.findOne);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);

export default router;
