const ProductModel = require ('../models/productModels')


exports.getproducts = async (req ,res ,next)=>{
    const query = req.query.keyword?{ name : { 
        $regex: req.query.keyword,
        $options: 'i'
     }}:{}
const products = await ProductModel.find(query)





    res.json({
        sucess: true,
        products
    })
}


exports.getsingleproducts =async(req,res,next)=>{
  
 
   try {
    const product = await ProductModel.findById(req.params.id);
    res.json({
        success: true,
        product
    })
} catch (error) {
    res.status(404).json({
        success: false,
        message: 'Unable to get Product with that ID'
    })
}
}