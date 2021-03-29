import React from "react";

function ChatPage() {
  return (
    <>
      <div className="dropdown float-right m-2">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          <span className="material-icons ">account_circle</span>
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown_list">
            <a href="setting.html">
              <span className="material-icons dropdown_icon">settings</span>{" "}
              Settings
            </a>
          </li>
          <li className="dropdown_list">
            <a href="chating.html">
              <span className="material-icons dropdown_icon2">chat</span>Chating
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="modal" styles="display: block;" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  className="modal_heading_img mx-auto d-block img-fluid"
                  src="gaming.png"
                  alt=""
                />
              </div>

              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="phone">Phone:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Phone"
                      name="phone"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer" styles="justify-content: center;">
                <a
                  type="submit"
                  className="btn btn-primary float-left"
                  onclick="removeModal()"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  Submit
                </a>

                <a
                  type="a"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  id="close_modal"
                  onclick="removeModal()"
                >
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default ChatPage;
