const express = require('express') //always import the library to use
const router  = express.Router() //create an instance of the router constructor function  
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require ('../controller/product.controller.js') 


router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)

module.exports = router 