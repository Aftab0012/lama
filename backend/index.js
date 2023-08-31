const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// const rateLimit = require("express-rate-limit");
const userRoutes = require("./Routes/UserRoutes");
const addProjectRoutes = require("./Routes/ProjectRoutes");
const generalFormRoute = require("./Routes/GeneralFormRoute");
const displayFormRoute = require("./Routes/DisplayFormRoute");

const app = express();
const PORT = 5000;
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 25, // Limit each IP to 25 requests per windowMs
// });

const DB_URI = "mongodb://127.0.0.1:27017/lama";
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to Db at, " + DB_URI);
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/users", userRoutes);
app.use("/users/projects", addProjectRoutes);
app.use("/users/generalform", generalFormRoute);
app.use("/users/displayform", displayFormRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
