const express = require("express");
const app = express();
const morgan  = require('morgan')

app.listen(3000);

app.use(morgan('dev'))
app.use(express.static("public"));
app.use(express.static("public/img"));

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
