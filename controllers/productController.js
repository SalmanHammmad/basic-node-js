import Product from '../models/productModel.js';

//Get All Products
export const GetProducts = async (req, res) => {    
    try {
        const products = await Product.find();
        res.status(200).json({ data: products, message: 'Products fetched successfully' });
    } catch(err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

//Get a Product
export const GetProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({ data: product, message: 'Product fetched successfully' });
    } catch(err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

// Add a Product
export const CreateProduct = async (req, res) => {   
    try {
        const { Product_Name, price } = req.body;
        const product = await Product.create({ name: Product_Name, price });
        if (!product) {
            return res.status(400).json({ message: 'Product not created' });
        }
        res.status(201).json({ data: product, message: 'Product created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}