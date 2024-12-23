const mongoose=require('mongoose');
require('dotenv').config();
const connectToDb=()=>{
    mongoose.connect(`mongodb+srv://${process.env.MongoDbUserName}:${process.env.MongoDbPassword}@cluster0.4mvjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(()=>{
        console.log("Connected to database successfully")
    })
    .catch((err)=>{
        console.log("Error in connecting to database",err)
    })
}
module.exports=connectToDb;