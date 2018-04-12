//Exercise 13: JSON API Server
//based on tutorial by Daniel Paul Grech Pereira

const http = require('http'),
 url = require('url');

const getTimeStamp = (time) => {
 return Date.parse(time);
}

const getUnixTimeStamp = (time) => {
 return {
  unixtime: getTimeStamp(time)
 }
}

const getTimeObj = (time) => {
 let date = new Date(getTimeStamp(time));
 return {
  hour:date.getHours(),
  minute:date.getMinutes(),
  second:date.getSeconds()
 };
}

const server = http.createServer((req, res) => {
 let urlObject = url.parse(req.url, true),
 urlTime = urlObject.query.iso,
 result;
 
 if (urlObject.pathname === '/api/parsetime') {
  result = getTimeObj(urlTime);
 } else if (urlObject.pathname === '/api/unixtime') {
  result = getUnixTimeStamp(urlTime);
 }
 
 if (result) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(result));
 } else {
  res.writeHead(404);
  res.end();
 }
    
}).listen(process.argv[2]);


/*NOTES
//Listen on port process.argv[2]

FIRST ENDPOINT
//1.Receive GET request
if (path === '/api/parsetime') 
proceed to next step

//2.Send data in JSON format
parse ISO-format time into:
-hour
-minute
-second


SECOND ENDPOINT

//1.Receive GET request
if (path === '/api/unixtime')
proceed to next step

//2.Send data in JSON format
parse ISO-format time into:
-milliseconds

*/




