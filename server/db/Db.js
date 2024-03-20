import { Db, MongoClient } from "mongodb";

let db = null;

function initializeDb() {
    const mongodbURI = "mongodb://wordle-user:wordle-pass@localhost:27017/";
    console.log("Instantiating Mongodb client 🍃");
    const client = new MongoClient(mongodbURI);
    db = client.db("wordle");
}

export default function getDb(){
    if(!db) {
        initializeDb()
    }

    return db;
}