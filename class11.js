const express = require("express");

const app = express();

const path =  require('path')

//html pages in node js 


 const getdirpath = path.join(__dirname,'public')

//  console.log("getdirpath:",getdirpath)

app.use(express.static(getdirpath))

app.get('/us', (req, resp) => {
    resp.sendFile(`${getdirpath}/home.html`);
  });

app.get("/about", (req, resp) => {
    resp.sendFile(`${getdirpath}/about.html`)
  
});

app.listen(4200, function () {
  console.log("my server is running");
});
