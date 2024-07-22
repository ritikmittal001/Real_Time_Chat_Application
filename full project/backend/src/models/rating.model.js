const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        require:true,
    },

    products:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        require:true,
    },
    rating:{
        type:Number,
        require:true,
    },
    createdAt:{
        type:Data,
        default:Date.now(),
    },
});

const Rating = mongoose.model("ratings",ratingSchema);

module.exports=Rating;