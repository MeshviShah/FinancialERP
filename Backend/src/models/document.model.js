import mongoose from "mongoose";
//User Schema
const documentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  file: {
    type: String,
  },
  service: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "service",
    },
  ],
  client_id: {
    type: mongoose.Schema.ObjectId,
    //type:String
  },
  task_id: {
    type: mongoose.Schema.ObjectId,
  },
  user_id: {
    type: mongoose.Schema.ObjectId,
  },
  year: {
    type: String,
  },
  created_by: {
    type: String,
  },
  created_at: {
    type: String,
  },
  updated_at: {
    type: Date,
  },
  deleted_date: {
    type: Date,
  },
  deleted_by: {
    type: String,
  },
});

const document = mongoose.model("document", documentSchema);
export { document };
