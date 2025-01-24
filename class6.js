const http =  require('http')

http.createServer((req ,resp)=>{
    resp.write("abdulrazzak")

    console.log("my server is running")
    resp.end()

    

}).listen(4000)