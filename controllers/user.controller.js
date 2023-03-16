import UserModel from "../models/userSchema.js";

export const addUser = async (req, res) => {
  res.json({ test: req.body.username });
};
