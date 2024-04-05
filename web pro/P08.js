// const http = require('http');
// const fs = require('fs');
// const { dataAdd, dataPrint, dataDelete } = require('./P07');

// const html = fs.readFileSync('P08.html', 'utf-8');

// const server = http.createServer((request, response) => {
//     const path = request.url.toLowerCase();

//     if (path === '/') {
//         response.end(html);
//     } else if (path === '/datafetch') {
//         dataPrint(request, response);
//     } else if (path === '/dataadd') {
//         dataAdd(request, response);
//     } else if (path === '/datadelete') {
//         dataDelete(request, response);
//     } else {
//         response.statusCode = 404;
//         response.end('Not Found');
//     }
// });

// const PORT = 8000;
// server.listen(PORT, () => {
//     console.log(`Server started on http://localhost:${PORT}/`);
// });

// Problem: I want to export P07 database entry function from P07.js, How can i do it? --> Solved

const http = require('http');
const fs = require('fs');

const { dataAdd, dataPrint, dataDelete } = require('./P07');

const html = fs.readFileSync('P08.html', 'UTF-8');

const server = http.createServer((request, response) => {
    const path = request.url.toLowerCase();

    if (path === '/') {
        response.end(html);
    }
    else if (path === '/datafetch') {
        console.log(2);
        dataPrint(request, response);
    }
    else if (path === '/dataadd') {
        console.log('called');
        dataAdd(request, response);
    }
    else if (path === '/datadelete') {
        dataDelete(request, response);
    }
    else {
        response.end('Error 404');
    }
})

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`);
})