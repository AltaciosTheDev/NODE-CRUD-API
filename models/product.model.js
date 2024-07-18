const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema( //defines structure or schema of a mongoDB document 
    {
        name:{
            type:String,
            required: [true, "Please enter product name"]
        },

        quantity:{
            type: Number,
            required: true,
            default:0
        },

        price: {
            type: Number,
            required: true,
            default:0
        },
        image:{
            type: String, 
            required: false 
        },
    },
    {
        timestamps: true //allows us to have two extra fields: when we created and latest updates 
    }
);

const Product = mongoose.model("Product", ProductSchema) //is a model created by a schema, represents a collection in mongoDB and provides an interface for interacting with the documents in thatt collection 
module.exports = Product //feature that allows for the export of objects, functions or values from a module