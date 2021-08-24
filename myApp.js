var express = require("express");
var app = express();

console.log("Hello World");

app.get("/", function (req, res) {
  res.send("Hello Express");
});

app.use("/public", express.static(__dirname + "/public"));
app.get("/json", function (req, res) {
  res.json({ message: "Hello json" });
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date();
    next();
  },
  function (req, res) {
    res.send({ time: req.time });
  }
);

module.exports = app;
