import "./startup/config.js";
import "./startup/logging.js";

import Express from "express";
import winston from "winston";

import connectDB from "./startup/databaseConnection.js";
import route from "./startup/routes.js";

const app = new Express();

route(app);

connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  winston.info(`Listing at port ${PORT}`);
});
