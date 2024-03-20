import { StJoinButton, StRoomCard, StRoomTitle } from "./RoomPreview.styled";

function RoomPreview({ roomData, introAnimation = false }) {
  return (
    <StRoomCard
      layout={true}
      key={roomData._id}
      initial={{
        scale: introAnimation ? 0 : 1,
      }}
      animate={{
        scale: 1
      }}
    >
      <StRoomTitle>{roomData.roomName}</StRoomTitle>
      <StJoinButton variant="miniAction" href={`/rooms/${roomData._id}`}>
        Join
      </StJoinButton>
    </StRoomCard>
  );
}

export default RoomPreview;
