import mongoose from "mongoose";
import winston from "winston";

const url = "mongodb://localhost:27017";

export default async () => {
  const connection = await mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => winston.info("Connected to MongoDB...")
  );
  return connection;
};
