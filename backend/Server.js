require("dotenv").config();
const express = require("express");
const app = express();

const songroutes = require("./src/routes/song.routes");

app.use(express.json());
app.use("/", songroutes);
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

module.exports = app;
