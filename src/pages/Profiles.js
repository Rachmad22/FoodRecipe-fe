import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/profile.css";
import { Link } from "react-router-dom";

// single page application

function Profile() {
  return (
    <div>
      {/* <!-- Start Navbar --> */}
      <Navbar />
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
                      <Link to="" className="nav-link active fw-bolder me-lg-4" aria-current="page">My Recipe</Link>
                      <Link to="" className="nav-link fw-bolder me-lg-4" >Saved Recipe</Link>
                      <Link to="" className="nav-link fw-bolder me-lg-4" >Liked Recipe</Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* <!-- thumbnail profile --> */}
          <div className="row mt-4 mb-4" id="myrecipe">
            <div className="col-lg-3 position-static">
              <Link to="/detail">
                <img src="./image/profile/photo1.jpg" alt="myrecipe" width="100%" height="175px" className="thumbnail" />
                </Link>
            </div>
            <div className="col-lg-3 position-static thumbnail">
              <Link to="/detail">
                <img src="./image/profile/photo2.jpg" alt="myrecipe" width="100%" height="175px" className="thumbnail" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}

export default Profile;