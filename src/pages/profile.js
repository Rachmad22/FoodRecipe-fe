import React from "react";
import "../styles/profile.css";
import { Link } from "react-router-dom";

// single page application

function Profile() {
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        document.querySelector(".navbar").classList.add("navbar-background");
      } else {
        document.querySelector(".navbar").classList.remove("navbar-background");
      }
    });
  }, []);

  return (
    <div>
      {/* <!-- Start Navbar --> */}
      <nav nav className="navbar navbar-expand-lg fixed-top" >
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active me-5" to="/">Home
              </Link>
              <Link className="nav-link me-5" to="add">
                Add Recipe
              </Link>
              <Link className="nav-link me-5" to="profile">
                Profile
              </Link>
            </div>
            <div className="ms-auto">
              <Link to="login">
                <button type="button" className="btn btn-light me-2">Log In</button>
              </Link>
              <Link to="signup">
                <button type="button" className="btn btn-warning">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </nav >
      {/* <!-- End of Navbar --> */}
      {/* <!-- Avatar --> */}
      <section>
        <div className="container content">
          <div className="row">
            <div className="col text-center">
              <a href="profile.html" className="text-decoration-none">
                <img src="./image/detail/user.jpg" alt="" className="rounded-circle avatar" />
                  <h5 className="image-title text-black fw-bold">RachmadNH</h5>
              </a>
            </div>
          </div>

          {/* <!-- Navbar profile --> */}
          <div className="row mt-5">
            <div className="col">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <div id="navbar-profile">
                    <div className="navbar-nav">
                      <a className="nav-link active fw-bolder me-lg-4" aria-current="page" href="#">My Recipe</a>
                      <a className="nav-link fw-bolder me-lg-4" href="#">Saved Recipe</a>
                      <a className="nav-link fw-bolder me-lg-4" href="#">Liked Recipe</a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* <!-- thumbnail profile --> */}
          <div className="row mt-4 mb-4" id="myrecipe">
            <div className="col-lg-3 position-static">
              <img src="./image/profile/photo1.jpg" alt="" width="100%" height="175px" className="thumbnail" />
            </div>
            <div className="col-lg-3 position-static thumbnail">
              <img src="./image/profile/photo2.jpg" alt="" width="100%" height="175px" className="thumbnail" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- footer --> */}
      <footer>
        <div>
          <h2>Eat, Cook, Repeat</h2>
          <p>Share your best recipe by uploading here !</p>

          <div className="footer-link">
            <p>Copyright 2022 by RNH. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Profile;