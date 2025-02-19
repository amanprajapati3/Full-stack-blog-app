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
  process.env.cloud_name,
  process.env.api_key
);

if (
  !process.env.cloud_name ||
  !process.env.api_key ||
  !process.env.api_secret
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
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

// Debugging: Check if Cloudinary credentials are available
if (
  !process.env.cloud_name ||
  !process.env.api_key ||
  !process.env.api_secret
) {
  console.error(
    "❌ Cloudinary configuration is missing! Check your .env file."
  );
}

const port = 3600;
const mongo_url =
  "mongodb+srv://aman_sid:aman_sid3114@backendwithaman.elzjx.mongodb.net/?retryWrites=true&w=majority&appName=BackendWithAman";
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
