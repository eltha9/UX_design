let app = require('express')()
let http = require('http').createServer(app)
let io = require('socket.io')(http)

app.get('/', (req,res)=>{
    res.send('test')
})

io.on('connection', (socket)=>{
    socket.emit('message',{"hello":"world"})

    socket.on('truc', (msg)=>{
        console.log(msg)
    })
    
    socket.broadcast.emit('')
    socket.on('disconnect', ()=>{
        console.log('disconect')
    })
})


http.listen(3000, ()=>{
    console.log('eheh oui')
})