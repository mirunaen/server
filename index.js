const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/test/:name", (req, res) => {
  res.send("hi!" + req.params.name);
});

app.listen(8000, () => {
  console.info("The server is running...");
});
