import express from 'express';
import {registered, AllAdmin, login, logOut} from '../controllers/user_controller.js';
// import { isAuthenticated } from '../middleware/authUser.js';

const route = express.Router();

route.post('/registered', registered);
route.post('/login', login)
route.get("/logOut", logOut);
route.get('/AllAdmin', AllAdmin);


export default route;
