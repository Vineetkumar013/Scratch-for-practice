const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
 
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    mobile:{
        type:String,
    },
    password:{
        type:String,
    },
})

const userModel = new mongoose.model("User", userSchema);

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);   
}

module.exports = {userModel}