import { ObjectId } from "mongodb";
import getDb from "./Db.js";

const rooms = getDb().collection("rooms");

export async function createNewRoom(newRoom) {
  await rooms.insertOne(newRoom);
  return newRoom;
}

export async function getAllRooms() {
    const roomsData = await rooms.find().toArray();
    return roomsData.map(room => {
      room._id = room._id.toString();
      return room;
    }
    )
}

export async function getRoom(roomId) {
  return await rooms.findOne({_id: new ObjectId(roomId)});
}