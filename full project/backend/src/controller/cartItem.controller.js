const cartItemService = require("../Services/cartItem.service.js");


const updateCartItem=async (req,res)=>{
    const user = req.user
    try{
        const updateCartItem=await cartItemService.updateCartItem(user._id,req.params.id,req.body);
        return res.status(200).send(updateCartItem);
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}


const removeCartItem=async (req,res)=>{
    const user = req.user
    try{
        await cartItemService.removeCartItem(user._id,req.params.id);
        return res.status(200).send({message:"cart item removed sucessfully"});
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}
module.exports={
    updateCartItem,
    removeCartItem,
}