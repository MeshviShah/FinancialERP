
import mongoose  from 'mongoose'
//Firm Schema
const firmSchema = new mongoose.Schema({
   
    name:{
        type:String
    },
    address:{
        type:String
    },
    email:{
        type:String
    },
    firm_image:{
        type:String
    },
    phone:{
        type:String
    },
    website:{
        type:String
    },
    status:{
        type:Number
    },
    created_data:{
        type:Date
    },
    updated_data:{
        type:Date
    },
    created_by:{
        type:String
    },
    updated_by:{
       type:String
    },
    deleted_data:{
        type:Date
    },
    deleted_by:{
        type:String
    }
})

const firm = mongoose.model('firm' , firmSchema)
export {firm}