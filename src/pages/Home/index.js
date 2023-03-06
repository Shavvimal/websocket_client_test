import React, { useState, useEffect } from "react";
import { ParticlesComponent, Form } from "../../components";
import socketIOClient from "socket.io-client";

function SignUp() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("No Message Received Yet");
  const [clientID, setClientID] = useState("No ClientID Yet");
  const [socket, setSocket] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const endpoint = !isChecked
    ? "http://localhost:3000"
    : "https://socket.quadra.trade";

  useEffect(() => {
    const socket = socketIOClient(endpoint);
    socket.on("connect", () => {
      setClientID(socket.id);
    });
    socket.on("tickers", (message) => {
      setMessage(JSON.stringify(message));
    });
    setSocket(socket);
  }, [endpoint]);

  useEffect(() => {
    socket ? socket.emit("join-channel", room) : null;
  }, [room]);

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      setRoom(e.target.value);
    }
  };
  const handleOnChange = () => {
    setIsChecked(!isChecked);
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
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      id="production"
                      name="production"
                      className="form-check-input float-left cursor-pointer mr-2 w-4 h-4 text-orange-500 bg-gray-100 rounded border-gray-300 focus:ring-orange-500 focus:ring-0 transition duration-200 focus:ring-offset-0"
                      checked={isChecked}
                      onChange={handleOnChange}
                    ></input>
                    <label
                      className="form-check-label inline-block text-white pt-0.5"
                      htmlFor="production"
                    >
                      Production
                    </label>
                  </div>
                  <p className="text-gray-300 text-lg mb-6 text-center">
                    Current Endpoint: {endpoint}
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
                  onKeyDown={keyPress}
                />
              </div>
              <p className="text-gray-300 text-lg mb-6 text-center my-6">
                Message:
              </p>
              <div className="relative bg-black  border border-orange-900 border-2 rounded-md rounded-md w-full text-center">
                {message}
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
