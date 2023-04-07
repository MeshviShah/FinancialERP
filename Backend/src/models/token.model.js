import mongoose from "mongoose";
//Firm Schema
const tokenSchema = new mongoose.Schema({
  token:{
    type: String,
  },
  created_data: {
    type: Date,
  },
 
  deleted_data: {
    type: Date,
  },

});

const Rtoken = mongoose.model("token", tokenSchema);
export { Rtoken };
