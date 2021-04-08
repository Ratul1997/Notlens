import React from "react";
import Footer from "../../common/Footer";
import TopNav from "../../common/TopNav";
function Games() {
  return (
    <>
      <TopNav />
      <div className="container">
        <section className="how-section padding-bottom padding-top">
          <div className="container wrapper">
            <div className="how-wrapper  animate__animated  animate__zoomInDown animate__delay-0.1s">
              <div className="how-item ">
                <div className="how-thumb">02</div>
                <h5 className="title">Minutes</h5>
              </div>
              <div className="how-item">
                <div className="how-thumb">34</div>
                <h5 className="title">Seconds</h5>
              </div>
            </div>
          </div>
        </section>

        <div className="row justify-content-center mb-30-none full_wrapper">
          <div className="col-4 game_item_wrapper_hidden_1">
            <div
              onclick="comeWrapper1()"
              className="gamer-item_hidden d-none section-bg-2 animate__animated animate__lightSpeedInLeft animate__delay-0.2s"
            >
              <div className="gamer-thumb_hidden"></div>
            </div>
            {/* reveal content */}
            {/* <div class="gamer-item  animate__animated  animate__fadeInDown animate__delay-0.25s section-bg-2 ">
            <div class="gamer-thumb d-flex justify-content-center">
              <img class="img-fluid" src="./images/gamers03.png" alt="gamers" />
            </div>
            <div class="gamer-content">
              <h5 class="game_title">
                <a href="#0">Panna Rahman</a>
              </h5>
            </div>
          </div> */}

            <div class="cards  animate__animated  animate__flip animate__delay-0.25s">
              <div class="front">
                <div class="user-img"></div>
                <h4 className="mt-4 name_gamer">Antonella Testa</h4>
              </div>

              <div class="back">
                <div class="user-img"></div>
              </div>
            </div>
          </div>

          <div className="col-4 game_item_wrapper_hidden_2 ">
            <div
              onclick="comeWrapper2()"
              className="gamer-item_hidden section-bg-2 animate__animated  animate__fadeInUp animate__delay-0.2s"
            >
              <div className="gamer-thumb_hidden d-flex justify-content-center"></div>
            </div>
          </div>
          <div className="col-4 game_item_wrapper_hidden_3 ">
            <div
              onclick="comeWrapper3()"
              className="gamer-item_hidden section-bg-2 animate__animated animate__lightSpeedInRight animate__delay-0.2s"
            >
              <div className="gamer-thumb_hidden"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Games;
