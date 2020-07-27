const stockholm = require("./data/stockholm.json");
const uppsala = require("./data/uppsala.json");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.get("/api/cleaning_service/:city", (req, res) => {
  console.log(req.params.city);
  if (req.params.city === "stockholm") {
    res.json(stockholm);
  } else if (req.params.city === "uppsala") {
    res.json(uppsala);
  } else {
    res.status(404).send("please enter a valid city");
  }
});

const port = process.env.PORT || 9000;
const server = app.listen(port, () => {
  console.log("Server started");
  console.log(`listening on http://localhost:${port}`);
});

module.exports = server;
