const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        require:true,
        default:"Customer"
    },
    mobile:{
        type:String,
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    paymentInfromation:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"payment_information"
        }
    ],
    rating:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratings"
        }
    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],

    createAt:{
        type:Date,
        default:Date.now()
    }
})

const User = mongoose.model("users",userSchema);

module.exports=User;
