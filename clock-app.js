
// ----------------Express Module-----------------

const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./clock-app/public'))

app.get('/', (req, res) => {
    console.log(path.resolve(__dirname))
    res.sendFile(path.resolve(__dirname,'./clock-app/index.html'))
})

app.all('*', (req, res) => {
    res.send(`
    <h1>Oops!</h1>
    <p>The page you are trying to find is not found :(</p>
    `)
})

app.listen(5500, () => {
    console.log(`Server listening on port 5500`)
})


// -------------HTTP Module------------------

// const { readFileSync } = require('fs');
// const http = require('http');

// const clockPage = readFileSync('../../../project/wesbos/2-css-js-clock/index.html')
// const clockStyle = readFileSync('../../../project/wesbos/2-css-js-clock/style.css')
// const clockJs = readFileSync('../../../project/wesbos/2-css-js-clock/cssClock.js')
// const clockBackground = readFileSync('../../../project/wesbos/2-css-js-clock/background.jpg')

// const server = http.createServer( (req, res) => {
//     const url = req.url;
//     // home page
//     console.log(url)
//     if(url === '/'){
//         res.writeHead(200,{'content-type' : 'text/html'})
//         res.write(clockPage)
//         res.end();
//     }
//     // clock css file
//     else if(url === '/style.css'){
//         res.writeHead(200,{'content-type' : 'text/css'})
//         res.write(clockStyle)
//         res.end();    
//     }
//     // clock js file
//     else if(url === '/cssClock.js'){
//         res.writeHead(200,{'content-type' : 'text/javascript'})
//         res.write(clockJs)
//         res.end();    
//     }
//     // clock background image
//     else if(url === '/background.jpg'){
//         res.writeHead(200,{'content-type' : 'image/jpg'})
//         res.write(clockBackground)
//         res.end();    
//     }
//     else if(url === '/download'){
//         res.writeHead(200,{'content-type' : 'text/html'})
//         res.write(`<h1>Downloads</h1>`)
//         res.end();    
//     }
//     // 404 page
//     else {
//         res.writeHead(404,{'content-type' : 'text/html'})
//         res.write(`<h1>Oops! Page not found</h1>`)
//         res.end();    
//     }
// })

// server.listen(7000);