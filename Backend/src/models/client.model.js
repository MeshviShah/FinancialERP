import mongoose from "mongoose";
//User Schema
const clientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  service_id: {
    type: mongoose.Schema.ObjectId,
    //type:String
  },
  ca_id: {
    type: mongoose.Schema.ObjectId,
    //type:String
  },
  firm_id: {
    type: mongoose.Schema.ObjectId,
  },
  address: {
    type: String,
  },
  gst_number: {
    type: String,
  },
  website: {
    type: String,
  },
  company_name: {
    type: String,
  },
  payment: {
    type: String,
  },
  created_by: {
    type: String,
  },
  updated_by: {
    type: String,
  },
  deleted_data: {
    type: Date,
  },
  deleted_by: {
    type: String,
  },
});

const client = mongoose.model("client", clientSchema);
export { client };
