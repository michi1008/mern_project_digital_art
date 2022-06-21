const express = require('express')
const router = express.Router()

const { getProducts, getProductById} = require('../controller/productControllers')

//@desc GET all products from db
//@route GET /api/produts
//@access Public
router.get('/', getProducts)

//@desc GET a product from db
//@route GET /api/produts/:id
//@access Public
router.get('/:id', getProductById )

module.exports = router