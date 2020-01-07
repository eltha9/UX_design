let app = require('express')()
let http = require('http').createServer(app)
let io = require('socket.io')(http)

app.get('/', (req,res)=>{
    res.send('test')
})

http.listen(3000, ()=>{
    console.log('eheh oui')
})