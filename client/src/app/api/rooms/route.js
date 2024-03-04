import { createNewRoom, getAllRooms } from "@/utils/roomsDb";
import { getNextSequence } from "@/utils/sequenceDb";
import { cookies } from "next/headers"

export async function GET() {
    return Response.json(await getAllRooms());
}

export async function POST() {
    const ownerUserId = cookies().get("uuid").value;
    const roomName = "Room " + await getNextSequence("roomId");

    const newRoom = {
        ownerUserId,
        roomName,
        created: new Date()
    }

    await createNewRoom(newRoom);

    return Response.json(newRoom);
}
