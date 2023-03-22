import mongoose from "mongoose";

//User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  firm_id: {
    type: mongoose.Schema.ObjectId,
  },
  role_id: {
    type: mongoose.Schema.ObjectId,
    //type:String
  },
  profile_image: {
    type: String,
  },
  status: {
    type: Number,
  },
  created_data: {
    type: Date,
  },
  updated_data: {
    type: Date,
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

const user = mongoose.model("user", userSchema);

export { user };
