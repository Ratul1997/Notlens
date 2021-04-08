import React from "react";
import TopNav from "../../common/TopNav";
import Footer from "../../common/Footer";
function Chatting() {
  return (
    <>
      <TopNav />
      <div class="container">
        <div class="container_chat clearfix mt-4">
          <div class="row mainBox">
            <div class="col-4 chatList">
              <div class="people-list" id="people-list">
                <div class="search_chatlist">
                  <input type="text" placeholder="search" />
                  <i class="fa fa-search"></i>
                </div>
                <ul class="list animate__animated  animate__animated animate__slideInUp">
                  <li class="clearfix">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
                      alt="avatar"
                    />
                    <div class="about">
                      <div class="name">Vincent Porter</div>
                      <div class="status">
                        <i class="fa fa-circle online"></i> online
                      </div>
                    </div>
                  </li>

                  <li class="clearfix">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg"
                      alt="avatar"
                    />
                    <div class="about">
                      <div class="name">Aiden Chavez</div>
                      <div class="status">
                        <i class="fa fa-circle offline"></i> left 7 mins ago
                      </div>
                    </div>
                  </li>

                  <li class="clearfix">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg"
                      alt="avatar"
                    />
                    <div class="about">
                      <div class="name">Monica Ward</div>
                      <div class="status">
                        <i class="fa fa-circle online"></i> online
                      </div>
                    </div>
                  </li>

                  <li class="clearfix">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg"
                      alt="avatar"
                    />
                    <div class="about">
                      <div class="name">Dean Henry</div>
                      <div class="status">
                        <i class="fa fa-circle offline"></i> offline since Oct
                        28
                      </div>
                    </div>
                  </li>

                  <li class="clearfix">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg"
                      alt="avatar"
                    />
                    <div class="about">
                      <div class="name">Peyton Mckinney</div>
                      <div class="status">
                        <i class="fa fa-circle online"></i> online
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-8">
              <div class="chat">
                <div class="chat-header clearfix">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
                    alt="avatar"
                  />

                  <div class="chat-about">
                    <div class="chat-with">Chat with Vincent Porter</div>
                    <div class="chat-num-messages">already 1 902 messages</div>
                  </div>
                  <i class="fa fa-star"></i>
                </div>

                <div class="chat-history">
                  <ul>
                    <li class="clearfix">
                      <div class="message-data align-right  animate__animated animate__rollIn">
                        <span class="message-data-time">10:10 AM, Today</span>{" "}
                        &nbsp; &nbsp;
                        <span class="message-data-name">Olia</span>{" "}
                        <i class="fa fa-circle me"></i>
                      </div>
                      <div class="message other-message float-right  animate__animated animate__rollIn">
                        Hi Vincent, how are you? How is the project coming
                        along?
                      </div>
                    </li>

                    <li>
                      <div class="message-data  animate__animated animate__rollIn">
                        <span class="message-data-name">
                          <i class="fa fa-circle online"></i> Vincent
                        </span>
                        <span class="message-data-time">10:12 AM, Today</span>
                      </div>
                      <div class="message my-message  animate__animated animate__rollIn">
                        Are we meeting today? Project has been already finished
                        and I have results to show you.
                      </div>
                    </li>

                    <li class="clearfix">
                      <div class="message-data align-right  animate__animated animate__rollIn">
                        <span class="message-data-time">10:14 AM, Today</span>{" "}
                        &nbsp; &nbsp;
                        <span class="message-data-name">Olia</span>{" "}
                        <i class="fa fa-circle me"></i>
                      </div>
                      <div class="message other-message float-right  animate__animated animate__rollIn">
                        Well I am not sure. The rest of the team is not here
                        yet. Maybe in an hour or so? Have you faced any problems
                        at the last phase of the project?
                      </div>
                    </li>

                    <li>
                      <div class="message-data  animate__animated animate__rollIn">
                        <span class="message-data-name">
                          <i class="fa fa-circle online"></i> Vincent
                        </span>
                        <span class="message-data-time">10:20 AM, Today</span>
                      </div>
                      <div class="message my-message  animate__animated animate__rollIn">
                        Actually everything was fine. I'm very excited to show
                        this to our team.
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="chat-message clearfix">
                  <textarea
                    name="message-to-send"
                    id="message-to-send"
                    placeholder="Type your message"
                    rows="3"
                  ></textarea>
                  <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                  <i class="fa fa-file-image-o"></i>
                  <button>Send</button>
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
export default Chatting;
