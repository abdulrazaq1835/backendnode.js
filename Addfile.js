const fs  = require('fs')

const path = require('path')

 const getfiledatapath = path.join(__dirname,'filedata')

 console.log("getfiledta:", getfiledatapath)
  
 fs.writeFileSync(getfiledatapath+'/abc.txt',"my name is abdulrazzak")

 