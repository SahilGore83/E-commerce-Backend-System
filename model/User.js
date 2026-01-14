const mongoose = require('mongoose')

//create Schema
const userschema = new mongoose.Schema({
    u_serid: Number,
    u_name: String,
    u_pwd: String,
    u_u_email: String,
    u_addr: String,
    u_contact: Number,
})

module.exports = mongoose.model("User", userschema)