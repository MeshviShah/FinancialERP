import mongoose from "mongoose";
//Role Schema
const service_categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  desciption: {
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

const service_category = mongoose.model(
  "service_category",
  service_categorySchema
);
export { service_category };
