const express=require('express');
const app=express();
const Port = 3000;

//sample product data

const products=[
    {id:1,name:'laptop',price:1000},
    { id: 2, name: 'Smartphone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 },
  { id: 4, name: 'Headphones', price: 100 },
  { id: 5, name: 'Smartwatch', price: 200 }
];

//Route to get all products or filtering by query strings
app.get('/products',(req,res)=>{
    const {name,minPrice,maxPrice}=req.query;
    let filteredProducts=products;

    //filter by name if provided
    if(name){
        filteredProducts=filteredProducts.filter(product=>product.name.toLowerCase().includes(name.toLowerCase()));
    }

    //filter by maximum price if provided
    if(maxPrice){
        filteredProducts=filteredProducts.filter(product=>product.price<=parseInt(maxPrice));
    }

    if(minPrice){
        filteredProducts=filteredProducts.filter(product=>product.price>=parseInt(minPrice));
    }

    res.json(filteredProducts);
});

app.listen(Port);



