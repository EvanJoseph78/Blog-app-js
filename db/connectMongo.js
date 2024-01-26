const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECT_URI);
    console.log("Conectado ao servidor do mongoDb");
  } catch (error) {
    console.log("Ocorreu um erro ao conectar no banco" + error.message);
  }
};

module.exports = connectDB;
