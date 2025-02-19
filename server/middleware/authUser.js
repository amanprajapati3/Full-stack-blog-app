import Users from "../models/user_models.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    console.log("📝 All Cookies:", req.cookies); // ✅ Debugging line

    const token = req.cookies.jwt; // 🛑 If this is undefined, cookies aren't being sent!
    console.log(`Middleware Token: ${token}`);

    if (!token) {
      return res.status(401).json({ error: "User not authenticated." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await Users.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Authentication error:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token has expired. Please log in again." });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token. Authentication failed." });
    }

    res.status(500).json({ error: "Internal server error." });
  }
};

export const isAdmin = (...roles) =>{
    return (req, res, next)=>{
      if(!roles.includes(req.Users.role)){
        return res.status(403).json({message: `user with given role ${req.Users.role} not allowed.`})
      }
      next();
    }
}
