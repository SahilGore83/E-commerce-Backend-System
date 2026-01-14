const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    u_name: String,
    u_pwd: String

}, { collection: "users" })

module.exports = mongoose.model("user", userSchema)