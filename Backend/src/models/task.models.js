import mongoose from "mongoose";

//User Schema
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  task_status: {
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
  client_id: {
    type: mongoose.Schema.ObjectId,
    ref:"client"
  },
  user_id: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "user", // Reference to the User model
    },
  ],
});
const task = mongoose.model("task", taskSchema);
export { task };
