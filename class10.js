const express = require('express')

  const app = express();

  app.get('/about',(req, resp)=>{

    // RENDER HTML IN NODE JS

    resp.send("<h3>welcome to Aboutpage...<h3/>")
    
  })


  app.get('/services',(req ,resp)=>{
    resp.send(`
         <input type='text' value= ${req.query.name}"/>
         <button>submit</button>        
        `)
  })



app.listen(4200,function(){
    console.log("my server is running")
}) 