const connection = require("../config/db.config")
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email:{
        type : String
    },
    phone:{
        type : String
    },
    firm_id:{
        type : String
    },
    role_id:{
        type : String
    },
    profile_image:{
        type : String
    },


})

module.exports = mongoose.model('user' , userSchema)