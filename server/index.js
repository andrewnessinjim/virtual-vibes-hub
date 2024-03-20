import { createServer } from 'node:http';
import { Server } from "socket.io";
import { findUser } from './db/userDb.js';


const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.use(async (socket, next) => {
    const uuid = socket.handshake.auth.uuid;
    console.log(await findUser(uuid));
    next();
})

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("chat message", (msg) => {
        console.log("Message: " + msg);
        io.emit("chat message", msg)
    })

    socket.on("disconnect", (obj) => {
        console.log(obj)
        console.log("User disconnected")
    })
})

httpServer.listen(3001, () => {
    console.log("🔌 server running at http://localhost:3001");
});