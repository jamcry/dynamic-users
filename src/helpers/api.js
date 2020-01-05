import openSocket from "socket.io-client";
const url = "https://wunder-provider.herokuapp.com/";
const socket = openSocket(url);

const subscribeToOutputStream = cb => {
  socket.on("connect", () => console.log("[ ] socket.io : Connected"));
  socket.on("userList", data => {
    // Invoke callback function with data (and null error)
    console.log("fetching data...");
    cb(null, data);
    console.log({ data });
  });
  socket.on("error", () => console.error("[!] ERROR with socket.io"));
  socket.on("disconnect", () => console.log("[ ] socket.io : Disconnected"));
};

export { subscribeToOutputStream };
