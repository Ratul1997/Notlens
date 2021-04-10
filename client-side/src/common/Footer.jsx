import React from "react";
function Footer() {
  return (
    <div className="waveWrapper waveAnimation">
      <div className="waveWrapperInner bgTop">
        <div
          className="wave waveTop"
          styles="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"
        ></div>
      </div>

      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
          styles="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
        ></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          styles="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
        ></div>
      </div>
    </div>
  );
}
export default Footer;
