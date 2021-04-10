import React,{useState,useEffect} from "react";
import Footer from "../../common/Footer";
import TopNav from "../../common/TopNav";
function Congratulation() {
  const [displayChat,setDisplayChat] = useState('none');
  const [displayCongress,setDisplayCongress] = useState('block');
  const openChat= ()=>{
    setDisplayCongress('none');
    setDisplayChat('block');
  }



 



  return (
    <>
      <TopNav />
      <div class="container">
        <div class="congrats text-center" style={{display:displayCongress}}>
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
            onClick={openChat}
            class="btn btn-lg btn-primary mt-1 animate__animated animate__zoomInDown  animate__delay-1.5s"
          >
            Start Chat
          </a>
        </div>
     
          <div class="row m-5 chatBOX animate__animated animate__slideInRight" style={{display:displayChat}}>           
              <div class="chat_congress">
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
      <Footer />
    </>
  );
}
export default Congratulation;
