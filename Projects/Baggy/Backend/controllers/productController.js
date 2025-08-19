const productModel = require('../models/product')
const upload = require('../config/multer-config')
const mongoose = require('mongoose')

module.exports.createProduct = async (req, res) => {
    try {
        const { productName, productPrice, discountPrice, backgroundColor, panelColor, textColor } = req.body

        const product = await productModel.create({
            name: productName,
            price: productPrice,
            discount: discountPrice,
            bgcolor: backgroundColor,
            panelcolor: panelColor,
            textcolor: textColor,
            image: req.file ? req.file.filename : null
        })

        res.status(200).json({ data: product })
    } catch (err) {
        res.status(500).json({ message: "Product is not added" })
    }
}

module.exports.getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find()
        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found" })
        }

        res.status(200).json({ data: products })
    } catch (err) {
        res.status(500).json({ message: "Products not found" })
    }
}



module.exports.getProducts = async (req, res) => {

    try {
        const cartIds = req.query[`cartData[]`];

        const objectIds = cartIds.map(id => new mongoose.Types.ObjectId(id));

       const products = await productModel.find({ _id: { $in: objectIds } }); // No .toArray() needed

    res.status(200).json({ data: products });
    } catch (err) {
        res.status(500).json({ message: "Products not found" })
    }
}

module.exports.deleteAllProducts = async (req, res) => {
    try {
        const result = await productModel.deleteMany({});
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No products to delete" });
        }
        res.status(200).json({ message: "All products deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting products" });
    }
}