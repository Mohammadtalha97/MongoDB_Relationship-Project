import bodyParser from "body-parser";
import dotenv from "dotenv";
import Express from "express";

import connectDB from "./config/databaseConnection.js";
import user from "./routes/user.js";

dotenv.config({ path: "./.env" });
const app = new Express();

if (!process.env.JWT_SECRET_KEY) {
  console.error("FATAL ERROR : Secret is not defined");
  process.exit(1);
}

connectDB();

// app.use(bodyParser.json({ limit: "200mb" }));
app.use(Express.json());
app.use("/api/user/", user);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listing at port ${PORT}`);
});
