import openSocket from "socket.io-client";
const url = "https://wunder-provider.herokuapp.com/";
const socket = openSocket(url);

const subscribeToOutputStream = cb => {
  socket.on("connect", () => console.log("[ ] socket.io : Connected"));
  // Invoke callback function with userList data (and null error)
  socket.on("userList", data => cb(null, data));
  socket.on("error", () => console.error("[!] ERROR with socket.io"));
  socket.on("disconnect", () => console.warn("[ ] socket.io : Disconnected"));
};

export { subscribeToOutputStream };
