import mongoose, { Schema } from "mongoose";

type Test = {
  name: string;
  description: string;
};

const schemaTest = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    lowercase: true,
    required: true,
  },
});

export default mongoose.model<Test>("Test", schemaTest);
