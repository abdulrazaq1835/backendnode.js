const express = require('express')

  const app = express();

  app.get('/',(req, resp)=>{

    resp.send("welcome to expressjs")
    
  })

  
  // app.get('/about',(req, resp)=>{

  //   resp.send("welcome to ABBOUT page1  ")
    
  // })


  app.get('/services',(req, resp)=>{

    console.log('req:',req)

    resp.send("welcome to services page  ")
    
  })

//   app.listen(4300)

/////////WAY=2............

app.listen(4200,function(){
    console.log("my server is runnnig")
})

const server = app.listen(4200,function(){

    const host = server.address().address
    const port =  server.address().port
    console.log("my server is runnnig  at http://%s:$s",host,port)
 
})













 