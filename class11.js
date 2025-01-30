const express = require("express");

const app = express();

const path =  require('path')

 const getdirpath = path.join(__dirname,'public')

 console.log("getdirpath:",getdirpath)

app.get("/", (req, resp) => {
    resp.send("welcome to expressjs");
  });

app.get("/about", (req, resp) => {
  resp.send("<h3>welcome to Aboutpage...<h3/>");
});

app.listen(4200, function () {
  console.log("my server is running");
});
