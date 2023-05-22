import mongoose from "mongoose";

//User Schema
const task_statusSchema = new mongoose.Schema({
  label_name: {
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

const task_status = mongoose.model("task_status", task_statusSchema);
export { task_status };
