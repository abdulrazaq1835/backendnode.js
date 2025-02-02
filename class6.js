const http =  require('http')

http.createServer((req ,resp)=>{
    resp.write("abdulrazzak")

    console.log("my server  runningg")
    resp.end()

    

}).listen(4000)