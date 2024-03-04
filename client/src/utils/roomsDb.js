import getDb from "./Db";

const rooms = getDb().collection("rooms");

export async function createNewRoom(newRoom) {
  await rooms.insertOne(newRoom);
  return newRoom;
}

export async function getAllRooms() {
    return await rooms.find().toArray();
}

export async function getRoom(roomId) {
  return await rooms.findOne({_id: roomId});
}