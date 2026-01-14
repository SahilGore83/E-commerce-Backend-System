const router = require('express').Router()
const userapi = require('../apis/userApis')
//fetch all user
router.get('/userfetch', userapi.user_all)
//insert the user
router.post('/userinsert', userapi.insert_user)
//update the user
router.put('/userupdate', userapi.update_user)
//delete the user
router.delete('/userdelete', userapi.delete_user)

module.exports = router