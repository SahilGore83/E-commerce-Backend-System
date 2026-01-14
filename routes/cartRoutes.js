const router = require('express').Router()
const cartapi = require('../apis/cartApis')
//fetch all cart
router.post('/cartfetch', cartapi.Fetch_cart)
//insert the cart
router.post('/cartinsert', cartapi.insert_cart)
//update the cart
router.put('/cartupdate', cartapi.update_cart)
//delete the cart
router.delete('/cartdelete', cartapi.delete_cart)

module.exports = router