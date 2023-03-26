const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', true);
const dbConnect = ()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/ScratchForPractice");
        console.log("database connected")
    } catch (error) {
        console.log("database connected")
    }

}

module.exports = {dbConnect}