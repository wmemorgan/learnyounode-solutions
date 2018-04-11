//Exercise 9: Juggling Async
//Official Solution (Refactored to ES6 format)

const http = require('http'),
    bl = require('bl');

let count = 0,
completeData = [];

const printResults = () => {
    for (let i = 0; i < count; i++) {
        console.log(completeData[i]);
    }
}

const getData = (index) => {
    http.get(process.argv[2+index], (res) => {
        res.pipe(bl((err, data) => {
            if (err) {
                return console.error(err);
            }
            completeData[index] = data.toString();
            count++;
            
            if (count === 3){
                printResults();
            }
            
        }))
    });
}


for (let i = 0; i < 3; i++) {
    getData(i);
}


