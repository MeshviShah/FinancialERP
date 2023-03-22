import mongoose from "mongoose";
//Role Schema
const roleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  desciption: {
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
const role = mongoose.model("role", roleSchema);
export { role };
