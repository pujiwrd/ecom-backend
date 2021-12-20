const express = require ('express');
const productRouter = express ();
const uploads = require ('../middleware/upload');

const productController = require('../controllers/controller.product');

productRouter.get('/product', productController.listProduct);
// productRouter.post('/detailproduct', productController.findById);
// productRouter.delete('/delete', productController.delete);
productRouter.post('/create', uploads.single ('image'), productController.createProduct);


module.exports = productRouter;