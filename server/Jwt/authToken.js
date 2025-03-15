import jwt from "jsonwebtoken";
import Users from "../models/user_models.js";

const createTokenAndSaveCookies = async (user_id, res) => {
  const token = jwt.sign({ user_id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    httpOnly: false,
    secure: true,
    sameSite: "none",
  })
  await Users.findByIdAndUpdate(user_id, {token});
  return token;
};

export default createTokenAndSaveCookies;
