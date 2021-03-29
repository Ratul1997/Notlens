import React from "react";
import PhoneNumberModal from "./Modals/PhoneNumberModal";
import OnlinePlayersModal from "./Modals/OnlinePlayersModal";
import Games from "./Games";
import TryAgain from "./Games/TryAgain";
import Congratulation from "./Games/Congratulation";
import TopNav from "../common/TopNav";
import Settings from "./Settings";
import Chatting from "./Chatting";
import Footer from "../common/Footer";

function PhoneNumber() {
  return (
    <>
      <PhoneNumberModal />
      <Footer />
    </>
  );
}

export default PhoneNumber;
