import React from "react";
import TopNav from "../../common/TopNav";
import Footer from "../../common/Footer";
function Settings() {
  return (
    <>
      <TopNav />
      <div class="container">
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-8 animate__animated animate__backInLeft">
                <div class="card">
                  <div class="card-header card-header-primary back_purple">
                    <h4 class="card-title font-weight-bold">Edit Profile</h4>
                    <p class="card-category">Change your Username</p>
                  </div>
                  <div class="card-body">
                    <form method="post">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="bmd-label-floating">
                              New Username
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter New Username"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        type="submit"
                        value="Change"
                        name="change_pass_submit"
                        class="btn btn-primary text-center"
                      />
                      <div class="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="col-md-4 animate__animated animate__backInUp">
                <div class="card card-profile">
                  <div class="card-avatar">
                    <a href="#pablo">
                      <img
                        width="100"
                        height="100"
                        class="img"
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                      />
                    </a>
                  </div>

                  <div class="card-body">
                    <h5 class="card-category mb-5">Rafatul Rafi</h5>
                    <div class="back_purple mb-2">
                      <h4 class="card-title">Change Photo</h4>
                      <h6 class="card-category">Change Your Photo</h6>
                    </div>

                    <div class="row">
                      <div class="col-4 p-2">
                        <img
                          src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
                          class="img_avatar"
                          alt=""
                        />
                      </div>

                      <div class="col-4 p-2">
                        <img
                          src="https://cdn3.vectorstock.com/i/1000x1000/20/67/woman-avatar-profile-vector-21372067.jpg"
                          class="img_avatar"
                          alt=""
                        />
                      </div>
                      <div class="col-4 p-2">
                        <img
                          src="data:image/jpeg;base64,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"
                          class="img_avatar"
                          alt=""
                        />
                      </div>
                      <div class="col-4 p-2">
                        <img
                          src="data:image/jpeg;base64,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"
                          class="img_avatar"
                          alt=""
                        />
                      </div>
                      <div class="col-4 p-2">
                        <img
                          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/121957401/original/b6ed86dfadc3da591daa67af138eb17c8e80cbe7/minimalist-flat-line-vector-avatar-design-for-you.jpg"
                          class="img_avatar"
                          alt=""
                        />
                      </div>
                      <div class="col-4 p-2">
                        <img
                          src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg"
                          class="img_avatar"
                          alt=""
                        />
                      </div>
                      <div class="col-4 p-2">
                        <img
                          src="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
                          class="img_avatar"
                          alt=""
                        />
                      </div>
                      <div class="col-4 p-2">
                        <img
                          src="https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png"
                          class="img_avatar"
                          alt=""
                        />
                      </div>
                      <div class="col-4 p-2">
                        <img
                          src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg"
                          class="img_avatar"
                          alt=""
                        />
                      </div>
                    </div>
                    <a href="#" class="btn btn-primary btn-round">
                      Change Photo
                    </a>
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
export default Settings;
