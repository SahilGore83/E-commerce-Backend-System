const mongoose = require('mongoose')

//create Schema
const productSchema = new mongoose.Schema({
    p_id: Number,
    p_name: String,
    p_cat: String,
    p_img: String,
    p_desc: String,
    p_gst: Number,
    p_cost: Number
})

module.exports = mongoose.model("Product", productSchema)
