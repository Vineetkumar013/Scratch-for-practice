const User= require("../model/userModel");
const asyncHandler = require("express-async-handler");


/////////////////////////////////// CREATE USER //////////////////////////////////

const createUser = asyncHandler(async (req,res)=>{
    const {email} =req.body;
    const findUser = await User.findOne(email);
    if(!findUser){
        const newUser = new User.craete(req.body);
        res.json(newUser)
    }else{
        console.log("Something went wrong in Create User");
    }
})

module.exports = {
    createUser
}  