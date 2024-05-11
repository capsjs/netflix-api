const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const app = express();
const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString, {connectTimeoutMS: 2000})
  .then(() => console.log("DB Connection Successfull"))
.catch(error =>  console.error(error));

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000 OK");
});