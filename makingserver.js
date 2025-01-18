//MAKING BASIC SERVER

const { application } = require('express');
const http =  require('http');

// http.createServer((req,resp)=>{
//     resp.write("abdulrazzak studied in college")
//     console.log("my server is ok")

//     resp.end()

// }).listen(3400)


//MAKING SIMPLE API

http.createServer((req,resp)=>{
    resp.writeHead(200 ,{'Content-Type':'application\json'})
    resp.write(JSON.stringify([{name:"abdulrazzak",
        mobnum:54495,
        gmail:"abdulrazza@21gmail.com",
       
},{name:"abdul",
    mobnum:544395,
    gmail:"abdulrazza@21gmail.com",}]))
    console.log("my server is ok")

    resp.end()

}).listen(3400)

