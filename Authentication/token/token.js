const jwt = require('jwt-simple')
const { model } = require('mongoose')

module.exports = (obj,enc_key)=>{
    return jwt.encode(obj,enc_key)
}