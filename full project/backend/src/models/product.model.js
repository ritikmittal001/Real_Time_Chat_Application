const mongoose = require("mongoose");



const productSchema = new mongoose.Schema({
    title:{
        type:String,

    },
    discription:{
        type:String,
    },
    price:{
        type:Number,
    },
    discountedPrice:{
        type:Number,
    },
    discountPersent:{
        type:Number,
    },
    quantity:{
        type:Number,
    },
    brand:{
        type:String,
    },
    color:{
        type:String,
    },
    sizes:[{
        name:{type:String},
        quantity:{type:Number},
    }],
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratings",
        },
    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviews",
        },
    ],

    numRatings:{
        type:Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },

});

const Product = mongoose.model("products",productSchema);
module.exports=Product;