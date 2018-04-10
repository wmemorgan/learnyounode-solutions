//Exercise 7: HTTP Client

const http = require('http');
let url = process.argv[2];
// console.log("URL is:", url);
// for (let i = 0; i < process.argv.length; i++) {
//     console.log(i, process.argv[i]);
// }

http.get(url, (res) => {
    const { statusCode } = res;
    // const contentType = res.headers['content-type'];
    // console.log("Got response: " + statusCode);
    // res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (data) => { 
        // rawData += data;
        console.log(String(data));
        
    });
    // res.on('end', () => {
    //     // const parsedData = JSON.parse(rawData);
    //     // console.log(parsedData);
    //     console.log(typeof rawData);
    //     console.log(rawData);
    // })
    
}).on('error', (e) => {
    console.log("Got error: " + e.message);
});
