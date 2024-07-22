const CartItem = require("../models/CartItem.model");
const userService=require("../Services/user.service");

async function updateCartItem(userId,cartItemId,cartItemData){
    try{
        const item= await findCartItemById(cartItemData);

        if(!item){
            throw new Error("cart item not found: ",cartItemId)
        }

        const user = await userService.findUserById(item.userId);

        if(!user){
            throw new Error("user not found: ",userId);
        }

        if(user._id.toString()===userId.toString()){
            item.quantity=cartItemData.quantity;
            item.price=item.quantity*item.product.price;
            item.discountedPrice=item.quantity*item.product.discountedPrice;

            const updateCartItem=await item.save();
            return updateCartItem;
        }
        else{
            throw new Error("You cannot Update the Cart Item");
        }
    }catch(error){
        throw new Error(error.message);
    }
}

async function removeCartItem(userId,cartItemId){
    const cartItem=await findCartItemById(cartItemId);
    const user=await userService.findUserById(userId);

    if(user._id.toString()===cartItem.userId.toString()){
        await CartItem.findCartItemByIdAndDelete(cartItemId)
    }
    throw new Error("You cant remove another user's item");

}

async function findCartItemById(cartItemId){
    const cartItem=await CartItem.findById(cartItemId);
    if(cartItem){
        return cartItem
    }
    else{
        throw new Error("Cartitem not found with id",cartItem);
    }
}

module.exports={updateCartItem,removeCartItem,findCartItemById}