import express from "express";
import data from "./data.js";

const app = express();
const mongoose = require("mongoose");

const DB =
  "mongodb+srv://mongodb123:mongo@123@clusterpro.tclrl.mongodb.net/project?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection"));

app.get("/api/companies", (req, res) => {
  res.send(data.companyList);
});

app.get("/api/schedules", (req, res) => {
  res.send(data.scheduleList);
});

app.get("/", (req, res) => {
  res.send("server is ready");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
