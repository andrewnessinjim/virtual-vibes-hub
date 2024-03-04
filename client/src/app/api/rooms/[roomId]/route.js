import { getRoom } from "@/utils/roomsDb"
import { ObjectId } from "mongodb";

export async function GET(request, {params}) {
    const room = await getRoom(ObjectId(params.roomId));
    return Response.json(room);
}