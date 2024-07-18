const Product = require('../models/product.model')

const getProducts = async (req, res) => {
    try{
        const products = await Product.find({})
        res.status(220).json(products)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const getProduct = async(req, res) => {
    try{
        const product = await Product.find({_id: req.params.id})
        res.status(200).json(product[0])
    }

    catch(error){
        res.status(500).json({message: error.message})
    }
}

const createProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body) //method provided by mongoose to create a new document to insert in the database
        res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async(req, res) => {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if(!product){
            return res.status(404).json({message: "Product not found"})
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const deleteProduct = async(req, res) => {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json({message: "Product not found, cannot delete"})
        }

        const isDeleted = await Product.findById(id)

        if(!isDeleted){
            res.status(200).json({message: "Product successfully deleted"})
        }
        else{
            throw new Error("An error occured while deleting")
        }
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

//node js function that allows to export multiple functions at the same time.
//the exports function is a special object that determines what is exported and what is made available through require().