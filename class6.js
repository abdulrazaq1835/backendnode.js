const http =  require('http')

http.createServer((req ,resp)=>{
    resp.write("abdulrazzak")

    resp.end()

    console.log("my server is running")

}).listen(4000)