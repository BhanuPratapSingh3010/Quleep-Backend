const User=require('../models/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');
let JWT_SECRET = "secretkey963"

const register=async(req,res)=>{
    const {name,email,password}=req.body
    console.log(req.body)
    if(!name || !email || !password ){
        return res.status(400).json({message:"Please fill all the fields"})
    }
    let user=await User.findOne({email})
    if(user){
        return res.status(400).json({message:"User already exists"})
    }
    else{
        try {
            let hashPassword = bcrypt.hashSync(password, salt);
            const user=await User.create({
                name,
                email,
                password:hashPassword
            })
            res.status(200).json({message:"User registered successfully",success:true,user})
        } catch (error) {
            res.status(500).json({message:"Error in creating User",success:false,error:error.message})
        }
        
    }
    
}

const login=async(req,res)=>{
    let {email,password}=req.body
    if(!email || !password){
        return res.status(400).json({message:"Please fill all the fields"})
    }
    let user=await User.findOne({email})
    if(!user){
        return res.status(400).json({message:"User does not exist"})
    }
    else{
        try {
        let isMatch = bcrypt.compareSync(password, user.password);
        if(isMatch){
            var token = jwt.sign({email: user.email, id: user._id}, JWT_SECRET);
            res.status(200).json({message:"User logged in successfully",success:true,token})
        }
        else{
            res.status(400).json({message:"Invalid credentials"})
        }
        } catch (error) {
            res.status(500).json({message:"Error in logging in User",success:false,error})
        }
    }
}

module.exports={register,login}