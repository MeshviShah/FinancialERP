import mongoose from "mongoose";
//Role Schema
const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category_id: {
    type: mongoose.Schema.ObjectId,
  },
  status: {
    type: String,
  },
  duration: {
    type: String,
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
const service = mongoose.model("service", serviceSchema);
export { service };
