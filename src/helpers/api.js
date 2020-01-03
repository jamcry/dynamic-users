import openSocket from "socket.io-client";
const noCorsPrefix = "https://cors-anywhere.herokuapp.com/";
const appUrl = "https://wunder-provider.herokuapp.com/";
const socketUrl = noCorsPrefix.concat(appUrl);
const socket = openSocket(appUrl);

const subscribeToOutputStream = cb => {
  socket.on("connect", () => console.log("[ ] socket.io : Connected"));
  socket.on("userList", data => {
    // Invoke callback function with data (and null error)
    cb(null, data);
    console.log({ data });
  });
  socket.on("error", () => console.error("[!] ERROR with socket.io"));
  socket.on("disconnect", () => console.log("[ ] socket.io : Disconnected"));
};

export { subscribeToOutputStream };
