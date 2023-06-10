// package
const mongoose = require("mongoose");
const config = require("config");
// URI
const uri = 'mongodb+srv://test:gmlwn1149@cluster1.gb0rgrd.mongodb.net/wanderlust';

// Connect MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(error.message);
    console.log("hi");
    process.exit(1);
  }
};

module.exports = connectDB;