const EventEmitter = require('events')
const { callbackify } = require('util')

const customEventEmitter = new EventEmitter()

customEventEmitter.once('response',(name,id)=>{
    console.log(`This is inside .on with name ${name} and id: ${id}`)
});

customEventEmitter.on('res',()=>{
    console.log("This is inside second .on")
});

customEventEmitter.emit('res','hello',23)
customEventEmitter.emit('res','hello',23)
customEventEmitter.emit('response','hello',23)
customEventEmitter.emit('response','hello',23)
customEventEmitter.addListener('res',()=>{
    console.log("This is inside second .on")
});
customEventEmitter.emit('res','hello',23)
customEventEmitter.removeAllListeners('res');
customEventEmitter.emit('res','hello',23)



const http = require('http')

const server = http.createServer();

server.on('request',(req,res)=>{
    res.end('Hello world')
})

server.listen(5000)
customEventEmitter.on('response',()=>{
    console.log(`This is response`)
})

customEventEmitter.on('response',()=>{
    console.log("Inside second on");
})

customEventEmitter.once('res',()=>{
    console.log("Inside once")
})

customEventEmitter.once('res',()=>{
    console.log("Inside second once")
})

customEventEmitter.emit('response','hello',34)