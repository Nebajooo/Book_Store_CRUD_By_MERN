const dbconfig = require("../config/db");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(dbconfig.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database successfully connected...");
  } catch (err) {
    console.log("Could not connect to database:" + err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
