import Users from "../models/user_models.js";
import jwt from "jsonwebtoken";

// ✅ Improved Authentication Middleware
export const isAuthenticated = async (req, res, next) => {
  try {
    console.log("📝 Cookies received:", req.cookies);

    const token = req.cookies?.jwt; // Check if cookies exist
    console.log("📌 Token extracted:", token);

    if (!token) {
      return res.status(401).json({ error: "User not authenticated. Token is missing." });
    }

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("✅ Decoded token:", decoded);

    // ✅ Fetch user from DB
    const user = await Users.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    req.user = user; // Attach user to request
    next();
  } catch (error) {
    console.error("❌ Authentication error:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Session expired. Please log in again." });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token. Authentication failed." });
    }

    res.status(500).json({ error: "Internal server error." });
  }
};

// ✅ Improved Admin Middleware
export const isAdmin = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: `Access denied. Role '${req.user.role}' not allowed.` });
    }

    next(); 
  };
};
