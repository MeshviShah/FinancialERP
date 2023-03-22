import mongoose from "mongoose";

//event_type Schema
const event_typeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
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
const event_type = mongoose.model("event_type", event_typeSchema);
export { event_type };
