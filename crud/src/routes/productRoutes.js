import express from 'express';
import ProductController from './productController.js';

const router = express.Router();
const controller = new ProductController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);
router.post('/reset', controller.reset);

export default router;
