const  mongoose  = require("mongoose");

const mondbUrl="mongodb://localhost:27017/Ecommerce_project";

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}
module.exports={connectDb}