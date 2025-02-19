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
  const { email, password, role } = req.body;
  try {
    if (!email || !password || !role) {
      return res.status(400).json({ message: "Please fill required fields" });
    }

    const user = await Users.findOne({ email }).select("+password");
    if (!user || !user.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (user.role !== role) {
      return res.status(401).json({ message: `Given role ${role} not found` });
    }

  
    const token = await createTokenAndSaveCookies(user._id, res);
    console.log("Login token:", token);

      // ✅ Set token as HTTP-only cookie
      res.cookie("jwt", token, {
        httpOnly: true, // ✅ Prevents XSS attacks
        secure: process.env.NODE_ENV === "production", // ✅ HTTPS in production
        sameSite: "strict", // ✅ Prevents CSRF attacks
        maxAge: 7 * 24 * 60 * 60 * 1000, // ✅ 7 days
      });

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// logout
export const logOut = async (req, res) => {
  res.clearCookie("jwt", { httpOnly: true });
  res.status(200).json({ message: "User Logout successfully." });
};

// // Read
// export const GetAll = async (req, res) => {
//   try {
//     const user_data = await Users.find();
//     if (!user_data) {
//       return res.status(404).json({ msg: "User data not found" });
//     }
//     res.status(200).json(user_data);
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// };

// export const getOne = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const UserExist = await Users.findById(id);
//     if (!UserExist) {
//       return res.status(200).json({ msg: "User not exist." });
//     }
//     res.status(200).json(UserExist);
//   } catch (error) {
//     res.status(404).json({ error: error });
//   }
// };

// // Update
// export const Updata_userData = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const UserExist = await Users.findById(id);
//     if (!UserExist) {
//       return res.status(404).json({ msg: "user not exist" });
//     }
//     const updateUserData = await Users.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     res.status(200).json({ msg: "User Updated Successfully" });
//   } catch (error) {
//     res.status(404).json({ error: error });
//   }
// };

// // Delete
// export const Delete_User = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const UserExist = await Users.findById(id);
//     if (!UserExist) {
//       return res.status(404).json({ msg: "User not found" });
//     }
//     await Users.findByIdAndDelete(id);
//     res.status(200).json({ msg: "user has been deleted." });
//   } catch (error) {}
// };

// get all admins
// export const AllAdmin = async (req, res, next) => {
//   try {
//     const admin = await Users.find({ role: "admin" });
//     res.status(400).json(admin);
//   } catch (error) {
//     res.status(404).json({ error: error });
//   }
// };

export const AllAdmin = async (req, res, next) => {
  try {
    const admin = await Users.find({ role: "admin" });
    res.status(200).json(admin); // Use 200 for success
  } catch (error) {
    res.status(500).json({ error: error.message }); // Use 500 for internal server error
  }
};
