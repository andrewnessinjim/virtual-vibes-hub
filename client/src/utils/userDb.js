import { MongoClient } from "mongodb";

const mongodbURI = "mongodb://wordle-user:wordle-pass@localhost:27017/";
console.log("Instantiating Mongodb client 🍃");
const client = new MongoClient(mongodbURI);
const database = client.db("wordle");
const users = database.collection("users");

export async function findUser(uuid) {
  return await users.findOne({ uuid });
}

export async function createNewUser(newUser) {
  await users.insertOne(newUser);
  return newUser;
}
