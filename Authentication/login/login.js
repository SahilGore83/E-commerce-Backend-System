const express = require("express");
const router = express.Router();

// Import mongoose
const mongoose = require("mongoose");

// Import token generator
const token = require("../token/token");

const login = require("../model/user");

router.post('/', async (req,res)=>{
    let u_name = req.body.u_name
    let u_pwd = req.body.u_pwd

    try{
        const user = await login.findOne({u_name,u_pwd})

        if(user){
            let obj = {u_name,u_pwd}
            const Token = token(obj, JSON.stringify(new Date()))
            res.json({"Auth":"Success", token:Token})
            console.log("Login Success");
        }
        else{
            res.json({"Auth":"Record Not Found"})
            console.log("Login Failed");
            
        }
    }
    catch(error){
        console.log(`Error during Login ${error}`);
        res.json({"Auth":"Failed because of some error"})
    }
})

module.exports = router