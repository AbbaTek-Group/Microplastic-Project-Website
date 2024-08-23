const express = require("express");
const app = express();
const morgan = require("morgan");
const nodemailer = require("nodemailer");

app.listen(3000);

// Middleware setup
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.static("public/img"));

app.get("/", (req, res) => {
  res.render("index");
});

app.use((req, res) => {
  res.status(404).render("404");
});
