import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const adminRegisterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

// Pre-save middleware to hash password before saving
adminRegisterSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
adminRegisterSchema.methods.isValidPassword = async function(inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

export const Admin = mongoose.model('Admin', adminRegisterSchema);