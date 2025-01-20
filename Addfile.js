const fs  = require('fs')

const path = require('path')

 const getfiledatapath = path.join(__dirname,'filedata')

 console.log("getfiledta:", getfiledatapath)
  
 fs.writeFileSync(getfiledatapath+'/abc.txt',"this is my first text")

