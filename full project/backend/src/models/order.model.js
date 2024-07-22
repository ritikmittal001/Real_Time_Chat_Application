const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"orderItems",
    }],
    orderDate:{
        type:Date,
        require:true,
        default:Date.now(),
    },
  
    deliveryDate:{
        type:Date,
    },
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId;
        ref:'addresses'
    },
    paymentDetails:{
        paymentMethod:{
            type:String,
        },
        transctionId:{
            type:String,
        },
        paymentId:{
            type:String,
        },
        paymentStatus:{
            type:String,
            default:"PENDING",
        }
    },

    totalPrice:{
        type:String,
        require:true,
    },

    totalDiscountedPrice:{
        type:Number,
        require:true,
    },
    discounte:{
        type:Number,
        require:true,
    },
    orderStatus:{
        type:String,
        require:true,
        default:"PENDING",
    },
    totalItem:{
        type:Number,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },

    
});

const Order = mongoose.model("orders",orderSchema);
module.exports=Order;