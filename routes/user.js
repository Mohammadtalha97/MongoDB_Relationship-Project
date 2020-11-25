import express from "express";
import { registration, login } from "../controller/user.js";
const router = express.Router();

// router.post("/register", (req, res) => {
//   res.send(registration(req.body));
// });
router.post("/register", registration);
router.post("/login", login);

export default router;
