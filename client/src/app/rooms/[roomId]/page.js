import Room from "@/components/Room";

export default function RoomPage({params}){
    return <Room roomId={params.roomId}/>
}