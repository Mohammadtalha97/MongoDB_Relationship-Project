import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export default () => {
  if (!process.env.JWT_SECRET_KEY) {
    console.log("s");
    throw new Error("FATAL ERROR : Secret is not defined");
  }
};
