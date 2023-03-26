const express = require('express');
const dotenv = require('dotenv').config ()
const { dbConnect } = require('./config/dbConnect');
const {authRoute} = require('./routes/authRoute');

dbConnect()
const app = express()
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.use("/user",authRoute);



const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})


