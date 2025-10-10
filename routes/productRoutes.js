//import express
const express = require('express')
//import Router
const router = express.Router()
//import apis/productApis
router.get("/", (req, res) => {
    res.send("Welcome")
})
const productApi = require('../apis/productApis')

//fetch product
router.get("/fetch", productApi.product_all)

//insert product
router.post("/insert", productApi.insert_product)

//update product

router.put('/update', productApi.update_product)

//deleting the record

router.delete('/delete', productApi.delete_product)

module.exports = router