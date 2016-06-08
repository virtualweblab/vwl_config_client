var io = require('socket.io-client');
var socketIO = io.connect('http://172.30.246.1:8080',{reconnect:true})
//var socketIO = io.connect('http://190.15.141.74:8080',{reconnect:true})
var net =  require('net')
var normalizeChain = require('./normalizeChain')


socketIO.on('connect', function(data){
  console.log('connected: ' + data)
})
socketIO.on('news', function(data){
  console.log(data)
})

socketIO.on('event', function(data){
  console.log(data)
})
//socketIO.emit('OMG', {hola:'Server Hola'})

var server =  net.createServer(function(socket){
  socket.on('data', function(data){
    // var dataObj = {}
    // var datasend = data + '/'
    // datasend = datasend.substring(datasend.indexOf('{')+1, datasend.indexOf('&'))
    // var entradas = datasend.substring(datasend.indexOf('I'),datasend.indexOf('}')).split(',')
    // var salidas = datasend.substring(datasend.search('S') + 3, datasend.search('},IA')).split(',')
    // var analogas = datasend.substring(datasend.search('IA1'), datasend.search('}}')).split(',')
    //
    // var arrE = []
    // var arrS = []
    // var arrA = []
    //
    // for (var i in entradas) {
    //   arrE.push(parseInt(entradas[i].slice(entradas[i].search(':') + 1 ,entradas[i].length)))
    //   //console.log(entradas[i].typeOf);
    // }
    // for (var i in salidas) {
    //   arrS.push(parseInt(salidas[i].slice(salidas[i].search(':') + 1 ,salidas[i].length)))
    //   //console.log(entradas[i].typeOf);
    // }
    // for (var i in analogas) {
    //   arrA.push(parseInt(analogas[i].slice(analogas[i].search(':') + 1 ,analogas[i].length)))
    //   //console.log(entradas[i].typeOf);
    // }
    // dataObj.entradas = arrE
    // dataObj.salidas = arrS
    // dataObj.analogas = arrA

    console.log(normalizeChain(data))

    //console.log(dataObj.salidas)
    //console.log(dataObj.analogas)

    //console.log('Client said: ' + data)
    //socketIO.emit('OMG', {dataADQ:dataObj})
    //socketIO.emit('OMG', data)
  })
})

server.listen(2001, '172.31.68.14');
