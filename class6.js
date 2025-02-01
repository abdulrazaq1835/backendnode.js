const http =  require('http')

http.createServer((req ,resp)=>{
    resp.write("abdulrazzak")

    console.log("my server is runningg at 4000")
    resp.end()

    

}).listen(4000)