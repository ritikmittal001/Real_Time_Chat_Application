const express=require('express');
const app=express();

const products=[
    {id:1,name:'laptop',price:1000},
    {id:2,name:'phone',price:3000},
    {id:3,name:'tablet',price:2000},
];

app.get('/product',(req,res)=>{
    res.json(products);
});

app.get('/product/:productId',(req,res)=>{
    const productId=parseInt(req.params.productId);
    const product=products.find(p=>p.id==productId);
    if(!product){
        res.errored(`product is not found`);

    }
    res.json(product);
});

app.listen(3000);