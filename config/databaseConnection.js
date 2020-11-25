import mongoose from "mongoose";

const url = "mongodb://localhost:27017";

export default async () => {
  try {
    const connection = await mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      () => console.log("DB connected")
    );
    return connection;
  } catch (err) {
    console.log("MongoDB Connection Error" + err);
  }
};
