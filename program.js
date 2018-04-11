//Exercise 10: Time Server
//My Solution #2 (adapted from Official Solution)

const net = require('net');

const fillZero = (num) => { return (num < 10 ? '0' : '') + num }

const getDate = () => {
    let date = new Date();
    console.log((date.getMonth()+1));

    return date.getFullYear() + '-' + 
    fillZero((date.getMonth()+1)) + '-' +
    fillZero(date.getDate()) + ' ' +
    fillZero(date.getHours()) + ':' +
    fillZero(date.getMinutes())
}

const server = net.createServer((socket) => {
    socket.end(getDate() + '\n');
})

server.listen(process.argv[2]);




