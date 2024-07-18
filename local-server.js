const http = require("http");
const url = require("url");
const port = 3000;
const fs = require("fs");


const server = http.createServer((req, res) => {

  let parsedUrl = url.parse(req.url);
  let urlPath = parsedUrl.pathname;

  let path = "views/";

  if (urlPath === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    path += "index.html";
  }

  //
  else if (urlPath.includes(".css")) {
    res.writeHead(200, { "Content-Type": "text/css" });
    path += `../public/${urlPath.slice(1)}`;
  }
  //
  else if (urlPath.includes(".js")) {
    res.writeHead(200, { "Content-Type": "text/js" });
    path += `../public/${urlPath.slice(1)}`;
  }
  //
  else if (urlPath.includes(".jpg")) {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    path = __dirname + '/public/img/' + urlPath.slice(1)
  }
  //
  else if (urlPath.includes(".png")) {
    res.writeHead(200, { "Content-Type": "image/png" });
    path = __dirname + '/public/img/' + urlPath.slice(1)
  }
  else if (urlPath.includes(".svg")) {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    path = __dirname + '/public/img/' + urlPath.slice(1)
  }
  
  //
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    path += "404.html";
  }

  console.log(`urlPath: ${urlPath}`);
  console.log(`path: ${path}`);
  console.log();

  fs.readFile(path, (err, data) => {
    console.log(path);
    if (err) {
      console.log("Error could not read data", err);
      res.write("<h1>Error 404 Page could not Found</h1>");
      res.end();
    } else if (path === "404.html") {
      console.log("Error could not read data");
      res.write(data);
      res.end();
    } else {
      console.log("Data Successful");
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, (err) => {
  if (err) {
    console.log("Error could not connect to port", port);
  } else {
    console.log("Successfully connected to port", port);
  }
});
