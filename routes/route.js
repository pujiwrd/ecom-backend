const express = require ('express');
const router = express.Router();

const productRouter = require('./product.route.');
router.use (productRouter);

module.exports = router;