const mongoose = require ('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema ({
    image : { type : String, require : true },
    nameProduct : { type : String, require : true },
    price     : { type : String, require : true },
    description : { type : String, require : true },
});

const product = mongoose.model ('product', productSchema);

module.exports = product;