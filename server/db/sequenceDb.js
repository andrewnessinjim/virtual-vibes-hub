import getDb from "./Db";

const db = getDb();

export async function getNextSequence(name) {
    const nextSeqDoc = await db.collection("counters").findOneAndUpdate(
        {_id: name},
        {$inc: {seq: 1}},
        {upsert: true, returnDocument: "after"}
    )
 
    return nextSeqDoc.seq;
 }