//Exercise 10: Time Server
//My Solution #1

const net = require('net');

const getDate = () => {
    let date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth()+1,
    day = date.getDate(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    currentDate = [year, month, day],
    currentTime = [hours, minutes];
    
    for (i = 1; i < currentDate.length; i++) {
        currentDate[i] = ('00' + currentDate[i]).slice(-2);
        currentTime[i-1] = ('00' + currentTime[i-1]).slice(-2);
    }
    
    let data = currentDate.join('-') + ' ' + currentTime.join(':') + '\n';
    // console.log(data);
    return data;
}

const server = net.createServer((socket) => {
    socket.end(getDate());
})

server.listen(process.argv[2]);




