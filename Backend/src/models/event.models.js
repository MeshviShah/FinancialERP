import mongoose from "mongoose";
//User Schema
const eventSchema = new mongoose.Schema({
  compuny_name: {
    type: String,
  },
  file: {
    type: String,
  },
  cost: {
    type: String,
  },
  due_data: {
    //  type : mongoose.Schema.ObjectId
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: Date,
  },
  event_type: {
    type: mongoose.Schema.ObjectId,
  },
  posted_on: {
    type: Date,
  },
  document: {
    type: Array,
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

const event = mongoose.model("event", eventSchema);
export { event };
