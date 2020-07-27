const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.get("/api/test", (req, res) => {
  console.log("api call");
  res.send({ test: "hejsan" });
});

const port = process.env.PORT || 9000;
const server = app.listen(port, () => {
  console.log("Server started");
  console.log(`listening on http://localhost:${port}`);
});

module.exports = server;
