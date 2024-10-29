// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/indexDB.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() =>
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Example app listening on port ${process.env.PORT}!`);
    })
  )
  .catch((error) => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    console.log(error);
  });

//
/*
(async () => {
  try {
    await mongoose.connect(`${process.env.mongoDBURI}/${DB_NAME}`);
    console.log(`${process.env.mongoDBURI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`)
    );
  } catch (error) {
    console.error(error);
  }
})();
*/
