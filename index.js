// console.log("helooo woerlld")

// const abdul = require("./Second")

// console.log("heloo",abdul)



// const http = require('http');
// http.createServer((req, resp) => {
//     resp.write("my name is abdul razzak"); // Sends this data to the client
//     console.log("my server is running");
//     resp.end(); // Signals the end of the response
// }).listen(5000);
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set the response header
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Welcome to the API!' }));
    } else if (req.url === '/user' && req.method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ name: 'Abdul Razzak', age: 25 }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

// Start the server
server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
