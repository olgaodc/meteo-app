const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cityRouter = require("./src/routes/city");
require("dotenv").config();
const port = process.env.PORT || 3000;
const mongoConnect = process.env.MONGO_CONNECT;

app.use(cors());
app.use(express.json());

app.use(cityRouter);

mongoose
  .connect(mongoConnect)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("err", err);
  });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
