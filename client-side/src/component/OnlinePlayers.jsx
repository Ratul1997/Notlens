import React, { useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Footer from "../common/Footer";
import OnlinePlayersModal from "./Modals/OnlinePlayersModal";
import TopNav from "../common/TopNav";

let socket;
function OnlinePlayers(props) {
  const { location } = props;
  const ENDPOINT = "http://localhost:5000";
  useEffect(() => {
    const { phoneNumber } = queryString.parse(location.search);
    socket = io(ENDPOINT, {
      transports: ["websocket", "polling", "flashsocket"]
    });

    console.log(phoneNumber, socket);

    socket.emit("join", { phoneNumber });
  }, [ENDPOINT, location.search]);
  return (
    <>
      <TopNav />
      <OnlinePlayersModal />
      <Footer />
    </>
  );
}

export default OnlinePlayers;
