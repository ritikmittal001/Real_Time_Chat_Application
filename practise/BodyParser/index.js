const express=require("express");
const app=express();
const bodyParser=require('body-parser');
const Port=8080;


app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.post('/submit-form',(req,res)=>{
    const {name,email}=req.body;
    console.log(`form submission received:Name-${name}, Email - ${email} `);

    res.send('Form Submitted sucessfully');
});


app.listen(Port,()=>{
    console.log("Surver is running")
})