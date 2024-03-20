import { getRoom } from "@/db/roomsDb"
import { ObjectId } from "mongodb";

export async function GET(request, {params}) {
    console.log("Hit")
    const room = await getRoom(ObjectId(params.roomId));
    return Response.json(room);
}