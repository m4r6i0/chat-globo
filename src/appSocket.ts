import IO from 'socket.io-client';

export const appSocket = IO("https://chat-globo-react.herokuapp.com/", {
  secure: true, reconnection: true
});
