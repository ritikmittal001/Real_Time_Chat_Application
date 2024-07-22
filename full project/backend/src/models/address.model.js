const mongoose=require("mongoose");

const AddressSchema= new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },

    lastName:{
        type:String,
        require:true,
    },

    streetAddress:{
        type:String,
        require:true,
    },
    state:{
        type:String,
        require:true,
    },
    zipCode:{
        type:String,
        require:true,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"users"
    },
    mobile:{
        type:String,
        require:true,
    }

})

const Address = new mongoose.model("addresses",AddressSchema);

module.exports=Address;