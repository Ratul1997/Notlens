/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { history } from "../../history/history";

function PhoneNumberModal() {
  const onClickSubmit = e => {
    console.log("ok");
    
    e.preventDefault();

    history.push("/online_players");
  };
  console.log('Checl')
  return (
    <>
      <div className="container">
        <div className="" styles="display: block;" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  className="modal_heading_img mx-auto d-block img-fluid"
                  src="./images/gaming.png"
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
                  // onclick={onClickSubmit}
                  href="/online_players"
                >
                  Submit
                </a>

                <a
                  type="a"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  id="close_modal"
                  //   onclick="removeModal()"
                >
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneNumberModal;
