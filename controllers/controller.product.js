const productSchema = require ('../models/product');
const userSchema = require ('../models/user');

class product {
  static findAll = async (req, res, next) => {
    try {
      const result = await productSchema.find();
      res.status(200).json({ Message: 'Berhasil menampilkan product ', result });
    } catch (error) {
      next(error);
    }
  };

  static findById = async (req, res, next) => {
    const { idProduct } = req.body;

    try {
      const result = await productSchema.findById(idProduct);
      res.status(200).json({ Message: 'Berhasil Melihat detail barang', result });
    } catch (error) {
      next(error);
    }
  };

    static createProduct = async (req, res, next) => {
    const protocol = req.protocol;
    const host = req.get("host");
    const url = protocol + "://" + host;
    const { image, nameProduct, price, description
    } = req.body;
    try {
      const result = await productSchema.create({
        image : url + '/uploads/'+ req.file.filename, 
        nameProduct, 
        price, 
        description

      });
      res.status(201).json({ success: true, result: result });
    } catch (error) {
      next(error);
    }
  };

  static listProduct = async (req, res, next) => {
    try {
    const result = await productSchema.find();
    res.status(200).json( result );
    }
    catch (error) {
    next(error)
    }
  };


}
module.exports = product;