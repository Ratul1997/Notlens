import React from "react";
import Footer from "../common/Footer";
import OnlinePlayersModal from "./Modals/OnlinePlayersModal";
import TopNav from "../common/TopNav";

function OnlinePlayers() {
  return (
    <>
      <TopNav />
      <OnlinePlayersModal />
      <Footer />
    </>
  );
}

export default OnlinePlayers;
