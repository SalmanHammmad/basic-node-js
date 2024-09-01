import mongoose from 'mongoose';

// Product Model
const productModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: Number,
}, { timestamps: true });

const Product = mongoose.model('Product', productModel);

export default Product;