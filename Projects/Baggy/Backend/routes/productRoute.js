const express = require('express')
const router = express.Router()
const upload = require('../config/multer-config')
const  productController = require('../controllers/productController')

router.get("/", productController.getAllProducts)

router.get("/getproducts", productController.getProducts)

router.post("/create",upload.single("image"), productController.createProduct)

router.post("/delete", productController.deleteAllProducts)
module.exports = router