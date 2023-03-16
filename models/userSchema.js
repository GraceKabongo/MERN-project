import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
      require: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      trim: true,
      minLength: 3,
      maxLength: 150,
      require: true,
    },
    password: {
      type: String,
      minLength: 6,
      maxLength: 250,
      require: true,
    },
    bio: String,
    followers: [String],
    following: [String],
    posts: [String],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
