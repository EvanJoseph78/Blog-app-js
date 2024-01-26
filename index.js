const express = require("express");

const app = express();

app.use(express.json());

require("dotenv").config();

//Routes
app.get("/", (req, res) => {
  return res.json("Hello!");
});

const connectDB = require("./db/connectMongo");
connectDB();

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
