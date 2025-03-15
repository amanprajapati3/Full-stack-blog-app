import Users from "../models/user_models.js";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import createTokenAndSaveCookies from "../Jwt/authToken.js";

// CRUD operation

// Registered
export const registered = async (req, res) => {
  try {
    const { email, name, password, phone, education, role } = req.body;

    if (!email || !name || !password || !phone || !education || !role) {
      return res
        .status(400)
        .json({ msg: "Please fill in all required fields" });
    }

    const user = await Users.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ msg: "User already exists with this email" });
    }

    const HashedPassword = await bcrypt.hash(password, 10);
    const user_data = new Users({
      email,
      name,
      password: HashedPassword,
      phone,
      education,
      role,
    });

    await user_data.save();

    const token = await createTokenAndSaveCookies(user_data._id, res);
    console.log("Registered token:", token);

    res.status(200).json({ msg: "User Registered successfully", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // ✅ Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    // ✅ Send HTTP-Only Cookie
    res.cookie("jwt", token, {
      httpOnly: true, // Prevents access from JavaScript (security)
      secure: process.env.NODE_ENV === "production", // Only send in HTTPS (for production)
      sameSite: "strict", // Prevents CSRF attacks
      maxAge: 3600000, // 1 hour
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// logout
export const logOut = async (req, res) => {
  res.clearCookie("jwt", { httpOnly: true });
  res.status(200).json({ message: "User Logout successfully." });
};

// get all admins

export const AllAdmin = async (req, res, next) => {
  try {
    const admin = await Users.find({ role: "admin" });
    res.status(200).json(admin); // Use 200 for success
  } catch (error) {
    res.status(500).json({ error: error.message }); // Use 500 for internal server error
  }
};
