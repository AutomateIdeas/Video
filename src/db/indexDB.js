import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // const connectionInstance = await mongoose.connect(
    //   `${process.env.mongoDBURI}/${DB_NAME}?retryWrites=true&w=majority`
    // );

    const connectionInstance = await mongoose.connect(
      `${process.env.mongoDBURI}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connected ! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection failed at db/index.js", error);
    process.exit(1);
  }
};

export default connectDB;
