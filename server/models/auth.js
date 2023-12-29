import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  tags: {
    type: [String],
  },
  joinedOn: {
    type: Date,
    default: Date.now,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
