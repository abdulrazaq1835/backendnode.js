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
         <a href="/user-list">go to user-list </a>       
        `)
  })

     
  app.get('/user-list',(req, resp)=>{
     
    const userlist =  [{studentname:"abdulrazzak",
      studentemail:"abdulrhmana@23gmail.com",
      studentcontact:2442434
      
    
    }, {studentname:"abdulRAXZAK",
      studentemail:"arazakl@23gmail.m",
      studentcontact:24238434324
      },
      {studentname:"abdulRAXZAK",
        studentemail:"arazakl@23gmail.m",
        studentcontact:24238434324
        }]

      resp.send(userlist)
  
  })









 

app.listen(4200,function(){
    console.log("my server is running")
}) 


