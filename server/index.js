import { createServer } from "node:http";
import { Server } from "socket.io";
import { findUser } from "./db/userDb.js";
import { createNewRoom, getAllRooms } from "./db/roomsDb.js";
import { getNextSequence } from "./db/sequenceDb.js";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.use(async (socket, next) => {
  const uuid = socket.handshake.auth.uuid;
  console.log(await findUser(uuid));
  next();
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("create-room", async (callback) => {
    const ownerUserId = socket.handshake.auth.uuid;
    const roomName = "Room " + (await getNextSequence("roomId"));

    const newRoom = {
      ownerUserId,
      roomName,
      created: new Date(),
    };

    await createNewRoom(newRoom);

    callback(newRoom);
    io.emit("room-created", newRoom);
  });

  socket.on("fetch-rooms", async (callback) => {
    callback(await getAllRooms());
  });

  socket.on("join-room", (data, callback) => {
    socket.join(data.roomId)
    console.log(`${data.user.username} joined room ${data.roomId}`);
    callback({success: true});
  })

  socket.on("disconnect", (obj) => {
    console.log(obj);
    console.log("User disconnected");
  });
});

httpServer.listen(3001, () => {
  console.log("🔌 server running at http://localhost:3001");
});
