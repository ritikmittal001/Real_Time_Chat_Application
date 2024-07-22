const mongoose = require("mongoose");

const cartSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    cartItems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"cartItem",
        }
    ],
    totalPrice:{
        type:Number,
        require:true,
        default:0
    },
    totalItem:{
        type:Number,
        require:true,
        default:0
    },
    discounte:{
        type:Number,
        require:true,
        default:0,
    },

});

const Cart = mongoose.model("cart",cartSchema);
module.exports=Cart;