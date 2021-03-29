import React from "react";
import Footer from "../../common/Footer";
import TopNav from "../../common/TopNav";
function Congratulation() {
  return (
    <>
      <TopNav />
      <div class="container">
        <div class="congrats text-center">
          <h1 class="congrats_title mb-3">Congratulations!</h1>

          <div class="box mt-5">
            <a
              href="#"
              class="btn btn-lg btn-warning box_title animate__animated animate__backInLeft"
            >
              <span class="material-icons icn">card_giftcard</span> Gift
            </a>
            <a
              href="#"
              class="btn btn-lg btn-info box_title animate__animated animate__backInRight"
            >
              <span class="material-icons icn">batch_prediction</span>Offer
            </a>
          </div>
          <a
            onclick="openChat()"
            class="btn btn-lg btn-primary mt-1 animate__animated animate__zoomInDown  animate__delay-1.5s"
          >
            Start Chat
          </a>
        </div>
        <div class="chatBox d-none animate__animated animate__slideInRight">
          <h3 class=" text-center">Messaging</h3>
          <div class="messaging">
            <div class="inbox_msg">
              <div class="mesgs">
                <div class="msg_history">
                  <div class="incoming_msg">
                    <div class="incoming_msg_img">
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div class="received_msg">
                      <div class="received_withd_msg">
                        <p>
                          Test which is a new approach to have all solutions
                        </p>
                        <span class="time_date"> 11:01 AM | June 9</span>
                      </div>
                    </div>
                  </div>
                  <div class="outgoing_msg">
                    <div class="sent_msg">
                      <p>Test which is a new approach to have all solutions</p>
                      <span class="time_date"> 11:01 AM | June 9</span>{" "}
                    </div>
                  </div>
                  <div class="incoming_msg">
                    <div class="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div class="received_msg">
                      <div class="received_withd_msg">
                        <p>Test, which is a new approach to have</p>
                        <span class="time_date"> 11:01 AM | Yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div class="outgoing_msg">
                    <div class="sent_msg">
                      <p>Apollo University, Delhi, India Test</p>
                      <span class="time_date"> 11:01 AM | Today</span>{" "}
                    </div>
                  </div>
                  <div class="outgoing_msg">
                    <div class="sent_msg">
                      <p>Apollo University, Delhi, India Test</p>
                      <span class="time_date"> 11:01 AM | Today</span>{" "}
                    </div>
                  </div>
                  <div class="incoming_msg">
                    <div class="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div class="received_msg">
                      <div class="received_withd_msg">
                        <p>Test, which is a new approach to have</p>
                        <span class="time_date"> 11:01 AM | Yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div class="incoming_msg">
                    <div class="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div class="received_msg">
                      <div class="received_withd_msg">
                        <p>Test, which is a new approach to have</p>
                        <span class="time_date"> 11:01 AM | Yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div class="outgoing_msg">
                    <div class="sent_msg">
                      <p>Apollo University, Delhi, India Test</p>
                      <span class="time_date"> 11:01 AM | Today</span>{" "}
                    </div>
                  </div>
                  <div class="incoming_msg">
                    <div class="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div class="received_msg">
                      <div class="received_withd_msg">
                        <p>
                          We work directly with our designers and suppliers, and
                          sell direct to you, which means quality, exclusive
                          products, at a price anyone can afford.
                        </p>
                        <span class="time_date"> 11:01 AM | Today</span>
                      </div>
                    </div>
                  </div>
                  <div class="incoming_msg">
                    <div class="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div class="received_msg">
                      <div class="received_withd_msg">
                        <p>Test, which is a new approach to have</p>
                        <span class="time_date"> 11:01 AM | Yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div class="incoming_msg">
                    <div class="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div class="received_msg">
                      <div class="received_withd_msg">
                        <p>Test, which is a new approach to have</p>
                        <span class="time_date"> 11:01 AM | Yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div class="incoming_msg">
                    <div class="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div class="received_msg">
                      <div class="received_withd_msg">
                        <p>Test, which is a new approach to have</p>
                        <span class="time_date"> 11:01 AM | Yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div class="incoming_msg">
                    <div class="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div class="received_msg">
                      <div class="received_withd_msg">
                        <p>Test, which is a new approach to have</p>
                        <span class="time_date"> 11:01 AM | Yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div class="incoming_msg">
                    <div class="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div class="received_msg">
                      <div class="received_withd_msg">
                        <p>Test, which is a new approach to have</p>
                        <span class="time_date"> 11:01 AM | Yesterday</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="type_msg">
                  <div class="input_msg_write">
                    <div class="row btnrow">
                      <div class="col-10">
                        <input
                          type="text"
                          class="write_msg"
                          placeholder="Type a message"
                        />
                      </div>

                      <div class="col-2 inputbtn">
                        <button class="msg_send_btn" type="button">
                          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Congratulation;
