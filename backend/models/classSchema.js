import mongoose from "mongoose";
import validator from "validator";

const classSchema = new mongoose.Schema({
  grade: {
    type: String,
    required: [true, 'Grade is required'], // Mongoose validation
  },
});


export const Class = mongoose.model('Classes', classSchema);
