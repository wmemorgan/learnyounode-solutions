//Exercise 9: Juggling Async
//callback from hell method (Solution #2)

const http = require('http');
const BufferList = require('bl');
let bl = new BufferList();
let url1 = process.argv[2],
url2 = process.argv[3],
url3 = process.argv[4],
completeData='',
data1 = '',
data2 = '',
data3 = ''

console.log(completeData);
// const getData = (url, results) => {
//     http.get(url, (res) => {
//         res.setEncoding('utf8');
//         res.on('data', (data) => { 
//             console.log(data);
//             results += data;
//             console.log(results);
//         });
//         res.on('end', () => { console.log(results) });
//     }).on('error', (err) => { console.error("Got error: " + err) }) ;
// }

// for (let i = 0; i < 1; i++) {
//     // console.log(process.argv[2+i]);
//     // console.log(completeData.push(i));
//     // console.log(completeData);
//     getData(process.argv[2+i], completeData[i]);
// }

// //Retrieve data from first URL
// http.get(url1, (res) => {
//     res.setEncoding('utf8');
//     res.on('data', (data) => { data1 += data });
//     res.on('end', () => {
//         // console.log(url1);
//         // console.log(data1.length);
//         console.log(data1);
//     //Retrieve data from second URL    
//     http.get(url2, (res) => {
//       res.on('data', (data) => { data2 += data });
//       res.on('end', () => {
//         //   console.log(url2);
//         //   console.log(data2.length);
//           console.log(data2);
//           //Retrieve data from third URL
//           http.get(url3, (res) => {
//               res.on('data', (data) => { data3 += data });
//               res.on('end', () => {
//                 //   console.log(url3);
//                 //   console.log(data3.length);
//                   console.log(data3);
//               })
//           })
//       })
//     })    
        
//     });
// }).on('error', (e) => { console.log("Got error: " + e.message) });


