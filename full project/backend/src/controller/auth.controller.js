
const userService = require("../Services/user.service")
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require('bcrypt');
const cartService=require("../Services/cart.service");

const register =async (req,res)=>{

    try{
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);
        // await cartService.createCart(user);

        return res.status(200).send({jwt,message:"register sucess"})


    }catch(error){
        return res.status(500).send({error:error.message});

    }


}

const login= async(req,res)=>{
    const {password,email}=req.body;
    try{
        const user =await userService.getUserByEmail(email);

        if(!user){
            return res.status(404).send({message: 'user not found with email: ',email});
        }

        const ispasswordValid = await bcrypt.compare(password,user.password);

        if(!ispasswordValid){
            return res.status(401).send({message:"Invalid password..."})
        }

        const jwt= jwtProvider.generateToken(user._id);
        return res.status(200).send({jwt,message:"login sucess"});

    }catch(error){
        return res.status(500).send({error:error.message});
    }
}

module.exports={register,login};