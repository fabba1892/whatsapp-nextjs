import styled from "styled-components";

function Message({ user, message }) {
  return (
    <Container>
      <p>{message.message}</p>
    </Container>
  );
}

export default Message;

const Container = styled.div``;

// messages in container
// now the messages get duisplayed in the container
// now can see which is sender and receiver



