import getDb from "./Db.js";

const users = getDb().collection("users");

export async function findUser(uuid) {
  return await users.findOne({ uuid });
}

export async function createNewUser(newUser) {
  await users.insertOne(newUser);
  return newUser;
}
