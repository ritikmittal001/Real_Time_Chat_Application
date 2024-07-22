const orderService = require("../Services/order.service.js")

const getAllOrder = async (req,res)=>{
    try{
        const orders=await orderService.getAllOrder();
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});

    }
}


const confirmedOrder = async (req,res)=>{

    const orderId = req.params.orderId;
    try{
        const orders=await orderService.confirmOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
        
    }
}


const shippOrder = async (req,res)=>{

    const orderId = req.params.orderId;
    try{
        const orders=await orderService.shipOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
        
    }
}

const deliverOrder = async (req,res)=>{

    const orderId = req.params.orderId;
    try{
        const orders=await orderService.deliverOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
        
    }
}

const cancelledOrder = async (req,res)=>{

    const orderId = req.params.orderId;
    try{
        const orders=await orderService.cancelledOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
        
    }
}

const deleteOrder = async (req,res)=>{

    const orderId = req.params.orderId;
    try{
        const orders=await orderService.deleteOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
        
    }
}

module.exports={
    getAllOrder,
    confirmedOrder,
    shippOrder,
    deleteOrder,
    cancelledOrder,
    deliverOrder,
}