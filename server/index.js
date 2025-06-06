import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import bodyParser from "body-parser";
import route from "./routes/user_route.js";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import Route from "./routes/blog_route.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

console.log(
  "🔍 Cloudinary Config:",
  process.env.CLOUD_NAME,
  process.env.API_KEY
);

if (
  !process.env.CLOUD_NAME ||
  !process.env.API_KEY ||
  !process.env.API_SECRET
) {
  console.error(
    "❌ Cloudinary configuration is missing! Check your .env file."
  );
}

// uploading image on web server

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/users", route);
app.use("/api/blog", Route);

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Debugging: Check if Cloudinary credentials are available
if (
  !process.env.CLOUD_NAME ||
  !process.env.API_KEY ||
  !process.env.API_SECRET
) {
  console.error(
    "❌ Cloudinary configuration is missing! Check your .env file."
  );
}

const port = process.env.PORT || 3600;
const mongo_url = process.env.DATABASE_URL
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("connected to server successfully");
    app.listen(port, () => {
      console.log(
        `your website is running at address http://localhost:${port}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
