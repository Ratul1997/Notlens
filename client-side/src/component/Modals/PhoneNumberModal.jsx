/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { history } from "../../history/history";
import firebase from "../../firebase/firbase";
function PhoneNumberModal() {
  const initialState = {
    phoneNumber: "",
    password: ""
  };
  const [state, setState] = useState(initialState);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  //     "recaptcha-container",
  //     {
  //       size: "invisible"
  //       // other options
  //     }
  //   );
  // }, []);

  const phoneAuth = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: response => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      }
    );
  };
  const onSignInSubmit = () => {
    const phoneNumber = state.phoneNumber;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
        console.log(confirmationResult);
      })
      .catch(error => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  };
  const handleClick = e => {
    // console.log(e);
    e.preventDefault();

    setSubmit(true);
    const { phoneNumber, password } = state;

    if (phoneNumber.length === 11 && password.length >= 6) {
      phoneAuth();
    } else {
      console.log(error);
      setError(true);
    }
  };

  const onChangeText = e => {
    console.log(e.target.name);
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value
    });
    setSubmit(false);
    setError(false);
  };

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
                  {submit && error && (
                    <p class="text-danger">
                      11 digits Phone number or Password should be minimum 6
                      character long
                    </p>
                  )}
                  <div className="form-group">
                    <label for="phone">Phone:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Phone"
                      name="phoneNumber"
                      value={state.phoneNumber}
                      onChange={onChangeText}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Phone"
                      name="password"
                      value={state.password}
                      onChange={onChangeText}
                    />
                  </div>
                </form>
              </div>

              <div className="modal-footer" styles="justify-content: center;">
                <button
                  onClick={handleClick}
                  id="recaptcha-container"
                  className="btn btn-primary float-left"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneNumberModal;
