import React, { useState, useEffect } from "react";
import { ParticlesComponent } from "../../components";
import io from "socket.io-client";

// Access JWT token from local storage
const token = localStorage.getItem("token");
console.log(token);

const endpoint = "https://socket-dev.quadra.trade";
//  send payload on connect
const socket = io(endpoint, {
  transports: ["websocket"],
  auth: {
    traderID: "0",
    quadraID: "0",
    token: token,
  },
});

function SignUp() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("No Message Received Yet");
  const [error, setError] = useState("No Errors");
  const [clientID, setClientID] = useState("No ClientID Yet");
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on("connect", () => {
      setClientID(socket.id);
      setIsConnected(true);
    });
    socket.on("data", (message) => {
      setMessage(JSON.stringify(message));
    });
    socket.on("disconnect", () => {
      setIsConnected(false);
    });
    socket.on("err", (err) => {
      setError(err);
    });
    return () => {
      //  the listeners must be removed in the cleanup step, in order to prevent multiple event registrations
      socket.off("connect");
      socket.off("disconnect");
      socket.off("data");
      socket.off("err");
    };
  }, []);

  const sendRoomSubscription = (e) => {
    if (e.keyCode == 13) {
      setRoom(e.target.value);
      socket.emit("join-channel", e.target.value);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Page content */}
        <main className="flex-grow">
          <section className="flex justify-center items-center md:h-screen">
            {/* box */}
            <div
              className="relative glass-div rounded-md pt-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden "
              data-aos="zoom-y-out"
            >
              <div className="relative flex flex-col lg:flex-row items-center justify-center ">
                {/* Contact content */}
                <div className="text-center lg:text-left lg:max-w-3xl ">
                  <h3 className="h3 text-3xl text-white mb-2 text-center">
                    Client WebSocket Testing Module
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 text-center">
                    Current Endpoint: {endpoint}
                    <br />
                    Connected: {"" + isConnected}
                    <br />
                    Current ClientID: {clientID}
                    <br />
                    Current Room: {room}
                  </p>
                </div>
              </div>

              <div className="relative z-0">
                <input
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-orange-900 bg-transparent py-2.5 px-0 text-sm text-white focus:border-orange-100 focus:outline-none focus:ring-0 text-center"
                  placeholder=" "
                  onKeyDown={sendRoomSubscription}
                />
              </div>
              <p className="text-gray-300 text-lg mb-6 text-center my-6">
                Message:
              </p>
              <div className="relative bg-black  border border-orange-900 border-2 rounded-md rounded-md w-full text-center max-h-1/2 max-w-3xl overflow-scroll">
                {message}
              </div>
              <p className="text-gray-300 text-lg mb-6 text-center my-6">
                Error:
              </p>
              <div className="relative bg-black  border border-orange-900 border-2 rounded-md rounded-md w-full text-center">
                {error}
              </div>
            </div>
          </section>
        </main>
        <ParticlesComponent id="tsparticles" />
      </div>
    </>
  );
}

export default SignUp;
