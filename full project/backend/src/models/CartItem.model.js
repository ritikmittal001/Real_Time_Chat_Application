const mongoose=require("mongoose");

const cartItemSchema=new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cart",
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        require:true,
    },
    size:{
        type:String,
        require:true,
    },
    quantity:{
        type:Number,
        require:true,
        default:1,
    },
    price:{
        type:Number,
        require:true,
    },
    discountPrice:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        require:true,
    },

});

const CartItem = mongoose.model('CartItems',cartItemSchema);
module.exports= CartItem;