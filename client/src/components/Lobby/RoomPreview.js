import { StJoinButton, StRoomCard, StRoomTitle } from "./RoomPreview.styled";

function RoomPreview({roomData}) {
  return (
    <StRoomCard key={roomData._id}>
      <StRoomTitle>{roomData.roomName}</StRoomTitle>
      <StJoinButton variant="miniAction" href={`/rooms/${roomData._id}`}>
        Join
      </StJoinButton>
    </StRoomCard>
  );
}

export default RoomPreview;
