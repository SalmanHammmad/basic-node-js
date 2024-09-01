import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Api is running');
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
import connectDB from './config/db.js';
connectDB();

// Routes
import productRoutes from './routes/productRoutes.js';
app.use('/products', productRoutes);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})