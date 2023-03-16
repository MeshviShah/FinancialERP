import mongoose  from 'mongoose'
//User Schema
const  documentSchema =new  mongoose.Schema({
    name:{
        type : String
    },
    file:{
        type : String
    },
    service_id:{
        type : mongoose.Schema.ObjectId
    },
    client_id:{
         type : mongoose.Schema.ObjectId
        //type:String
    },
    year:{
        type : String
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

const document = mongoose.model('document' , documentSchema)
export {document}