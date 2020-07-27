const stockholm = require("./data/stockholm.json");
const uppsala = require("./data/uppsala.json");
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("dist"));
app.use(cors());

app.get("/api/cleaning_service/:city", (req, res) => {
  if (req.params.city === "stockholm") {
    res.json(stockholm);
  } else if (req.params.city === "uppsala") {
    res.json(uppsala);
  } else {
    res.status(404).send("please enter a valid city");
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

const port = process.env.PORT || 9000;
const server = app.listen(port, () => {
  console.log("Server started");
  console.log(`listening on http://localhost:${port}`);
});

module.exports = server;
