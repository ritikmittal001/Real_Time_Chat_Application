const mongoose = require("mongoose");
const {Schema} = mongoose;

const orderItemSchema = new mongoose.Schema({

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        require:true,
    },
    size:{
        type:String,
    },
    quantity:{
        type:Number,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    discountedPrice:{
        type:Number,
        require:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        require:true,
    },
});

const Order = mongoose.model("OrderItems",orderItemSchema);

module.exports=Order;