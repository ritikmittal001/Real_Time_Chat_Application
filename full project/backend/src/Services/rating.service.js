const Rating=require("../models/rating.model.js");
const productService = require("../Services/product.service.js");

async function createRating(reqData,user){
    const product = await productService.findProductById(reqData,productId);

    const rating=new Rating({
        product:product._id,
        user:user._id,
        rating:req.Rating,
        createdAt:new Date(),
    })

    return await rating.save();

}

async function getProductRating(productId){
    return await Rating.find({product:productId});
}

module.exports={
    createRating,
    getProductRating
}