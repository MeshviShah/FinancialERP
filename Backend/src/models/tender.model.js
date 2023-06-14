import mongoose from "mongoose";

//User Schema
const tenderSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },

  file: {
    type: String,
  },
  value: {
    type: String,
  },
  service: {
    type: String,
  },
  tdr: {
    type: Number,
  },
  description: {
    type: String,
  },
  phone: {
    type: Number,
  },
  industry: {
    type: String,
  },
  email: {
    type: String,
  },
  file: {
    type: String,
  },
  last_date: {
    type: Date,
  },
  posted_date: {
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

const tender = mongoose.model("tender", tenderSchema);

export { tender };
