const express=require('express');
const app=express();
const path=require('path')

const Port=8080;

//set viewengine ejs
app.set('view engine','ejs');
//set path
app.set('views',path.join(__dirname,'views'));


const blogPosts=[
    {title:'First Blog Post',content:'This is a content'},
    {title:'second Blog Post',content:'This is a content'},
    {title:'third Blog Post',content:'This is a content'},
]

//routes
app.get('/',(req,res)=>{
    res.render('blog',{title:'Blog Posts',posts:blogPosts})
});

app.listen(Port,()=>{
    console.log(`Server is Running at ${Port}`);
})