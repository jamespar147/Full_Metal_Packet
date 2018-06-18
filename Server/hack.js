const readline = require('readline');
var io = require('socket.io-client');

var socket = io.connect('http://localhost:3000', {reconnect: true, name: "hacker"});

const playerName = "hacker";

// Handle user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Add a connect listener
socket.on('connect', function(data) {
    console.log('Connected!');
    // Ask the server to play
    message = {
        name: playerName,
        nonce: 0,
        publicKey: "E+DWTgXLjIoFognG8AuPbXJOLproQ6hI3LKbjHZKL0c6zdAV6a+8SX8VBtkoFp0Df2zTiiAazdr1lX7g1i+\
        wqso6t8ZbqIVt/4yWkBdy3PHtrNkBdCQmZh7xVAei+A2fPn/h12YSo9DE8ZuXRNhBJ/dCcn7gyai9jEZIvL/ALbGOE9qWpq\
        q5xZp3Do/6EaRgzq0/PccQrDsj1cPleixQYtXFJ2Yutk5LuqObtB0GaGqVsMaWANJipxI7AKN/S7YGST2MQUsbxs9QUqx6L\
        x1phr/UR8Ju50vkV5fmeoKqSx4+viMUYwT7PlD4MyFFlaNrLG/bq5gc65NNdUsHHV8HlpVs4mv53926OzYJ1QSaFPNpKqot\
        fel1l9eymAUK0+zKXjGS8JVXt0kv/PVZcUJbNZzYg/1rNBLiT3lG5v9Qdffa6+rt8LJMJMde9pG7FL8fJfOli5YRWpGNEu1\
        Gzftif3Jrwn/9wgTYaVibEsJMJ3PLt8udFxn2eMDeimVBJBIg8UQeHh35zaQz7/zBc/wzn1E/yjY2DBhmILbVtxOCZzRSTU\
        zXkHQVKT+ovk1Tm0fPl+M01jIyGDjY5P8mKeoNVp+bvP5Hs4+/iIlsQuxG/9sF67s7BpHcWmC6OdSRIZi0koYTZP63Fdtu8\
        dRa3tXBMC5HicqCbi+0u4fyukpWzmk=","nonce":"VCwd98WLC+PoOsDz3Y2hEAYWtsAPHCz3D/Eqs6XdIMZlWejO3yX8s\
        7pUxZSmQacxQRdT8o73HBFjt+tAhN/JbIjnYJis7t2xV0/mwEKaxlo6Zzfd/aX5re1EGER9TvOssbqlMqLHLyfZOFqunu3i\
        nMMYv8aDtxX9R/jNc7QNYdHGpLBHtgeKyhNH0VCnR6Yiv/PJ8g2JH1eVJldplXV7aywd/YxRB6+cDeQYurqgz3ghxDJGlDu\
        SRXVyKcm/fvl4XGB7VNq+fKRTL4tAn5xyzXFp28OTajE/ubP12B5RtlZQSDM1RcLp2P4Uhy1VIwUYEgyx9HnLysHfA+Nt3W\
        qCWvLPlcrYpRSu/qYFkTCbU7xOIoy+ih4YyzhYETkss3ZIojAmr+lPP7oXjqnao7kEqc1eGpPi6XprVtsnavmk96QZAfRp1\
        zQkx6/9XFdNXWtYZy/OQxCQ2aAHk44u1HvZOl9UsQwC//YCHq//11seUUh3HM95Og+cB4uLq6k9ifVSin5nEs9l24mJHt4J\
        a1GAAzbiSmBZq9/UevGlyD3Qtl9Kw92s2372i4+BrKpPLh85SZ/b8Ir+aRkWuAVJuhULgM7wMizlLG5cMFuY2wIJNnNfmIO\
        6Opa9rVZ1NvaAMeqTDyhHX13u+cYyqeIgTVV9WYuWnR9E6cwUqpC+MSDYxsQ=",
        position: [10000, 100000, 100000],
        rotation: [0, 0, 0],
        health: 100
    }
    socket.emit('play', message)
});

socket.on('play', function(data) {
    // Prompt the user
    question();
});

function question() {
    rl.question('Which player would you like to hack? (\"x\" or \"X\" to exit): ', (player) => {
        if (player == "x" || player == "X") {
            process.exit()
        }
        console.log(`What has ${player} ever done to you?`);

        json = {
            name: player.toString(),
            healthChange: 100,
            from: playerName,
            isEnemy: false
        };

        message = {
            json: JSON.stringify(json),
            signature: "you got me!"
        };

        socket.emit('health', message);
        console.log()
        question();
    });
}