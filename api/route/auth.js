import express from 'express';
import { register } from '../controllers/authController.js';

// init router 
const router = express.Router();

// create routes
router.route("/register").post(register)



export default router;