let http = require('http')
httpServer = http.createServer()
mosca = require('mosca')

let settings = {
  // port: 5112,
  // persistence: {
  //   factory: mosca.persistence.Mongo,
  //   url: "mongodb://localhost:27017/mosca"
  // }
  http: {
    port: 1884,
    bundle: true,
    static: './'
  }
}
let server = new mosca.Server(settings)

server.attachHttpServer(httpServer)

httpServer.listen(3003)
server.on('ready', () => {
  console.log('server is running at port 3003')
})

server.on('clientConnected', (client) => {
  console.log("Client connected", client.id)
})

server.on('published', (packet, client) => {
  console.log('Published', packet.payload.toString())
})



// const uuid = require("uuid") // console.log(uuid.v4())
// function randString (length) {
//   const list = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//   let res = ""
//   for (let i = 0; i < length; i++) {
//     let rnd = Math.floor(Math.random() * list.length)
//     res = res + list.charAt(rnd)
//   }
//   return res
// }

// const express = require('express')
// const http = require('http').Server(express)
// const io = require('socket.io')(http, {
//   cors: {
//     origin: "http://localhost:8080",
//     methods: ["GET", "POST"]
//   }
// })


// const board = ["BR", "BN", "BB", "BQ", "BK", "BB", "BN", "BR", "BP", "BP", "BP", "BP", "BP", "BP", "BP", "BP", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "WP", "WP", "WP", "WP", "WP", "WP", "WP", "WP", "WR", "WN", "WB", "WQ", "WK", "WB", "WN", "WR",]
// let rooms = {}


// io.of("/game").on("connection", socket => {



//   socket.on("joinRoom", (room) => {
//     if (room == "create") {
//       room = randString(6) // generate rooom name
//       socket.join(room) // joi the room

//       rooms[room] = { board: board.slice() } // add board
//       rooms[room].p1 = socket.id // add p1:s id, so it later can authenticate
//       rooms[room].turn = true // p1:s turn if true



//       console.log(`created room: ${room}`)
//       io.of("/game").in(room).emit("board", rooms[room].board)
//       io.of("/game").in(room).emit("status", ["p1", room])
//     }
//     else if (1) { //games.includes(room) CHECK IF ROOM EXISTS
//       socket.join(room)

//       if (!rooms[room].p2) { //if p2 doesn't already exist
//         rooms[room].p2 = socket.id
//         console.log(`p2 joined: ${room}`)
//         io.of("/game").in(room).emit("status", ["p2", room]) //give p2 stuff, has nothing with security to do though, just so it knows how to behave
//         //the player changing this data to p1 for example wont change anything
//       } else {

//         console.log(`spectator joined: ${room}`)
//         io.of("/game").in(room).emit("status", ["Spectator", room])
//       }
//       io.of("/game").in(room).emit("board", rooms[room].board)//to give new player the board



//     }
//     else {
//       return socket.emit("err", `ERROR, No room named ${room}`)
//     }
//   })


//   socket.on("move", data => {
//     room = data[0] //CHECK IF ROOM EXISTS, ELSE CRASH!!!!!!!
//     move = data[1]
//     // player = socket.id == rooms[room].p1 ? "p1" : "p2"
//     if (socket.id == rooms[room].p1) {
//       if (!rooms[room].turn) return console.log("p1 unathorized") // if true, p1 can play


//       console.log("player one")
//     }
//     else if (socket.id == rooms[room].p2) {
//       if (rooms[room].turn) return console.log("p2 unathorized") //if !true, p2 can play

//       console.log("player two")
//     }
//     else {
//       return console.log("UNATHOURIZED TRIED TO MOVE")
//     }

//     rooms[room].turn = !rooms[room].turn


//     rooms[room].board[move[1]] = rooms[room].board[move[0]] //second square gets the piece that occupies the first square
//     rooms[room].board[move[0]] = "" //clar second square
//     io.of("/game").in(room).emit("board", rooms[room].board)

//     // console.log(rooms)

//   })

// })

// port = 3000
// http.listen(port, () => {
//   console.log(`Listening at :${port}...`)

// })


