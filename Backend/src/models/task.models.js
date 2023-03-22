import mongoose from "mongoose";

//User Schema
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  user_id: {
    type: mongoose.Schema.ObjectId,
  },
  task_status: {
    type: mongoose.Schema.ObjectId,
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
const task = mongoose.model("task", taskSchema);
export { task };
