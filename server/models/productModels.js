const mongoose = require('mongoose')


 const ProductSchema = new mongoose.Schema({
    Name: String,
    price: String,
    descripation: String,
    ratings: String,
    images:[
        {
            ratings: String
        }
    ],
    category: String,
    seller: String,
    stock: String,
    numOfreviews: String,
    creatdAt: Date
});

 const ProductModel = mongoose.model('product',ProductSchema );


module.exports = ProductModel;