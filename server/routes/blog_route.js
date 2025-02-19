import express from "express";
import {create, GetAll, getOne, Updata_blogData, Delete_Blog} from "../controllers/Blog_controller.js"
// import {isAuthenticated} from "../middleware/authUser.js"

const Route = express.Router();

Route.post("/Create", create )
Route.get("/GetAll", GetAll )
Route.get("/getOne/:id", getOne )
Route.put('/Updata_blogData/:id', Updata_blogData);
Route.delete("/Delete_Blog/:id", Delete_Blog)

export default Route;