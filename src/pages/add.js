import React from "react";
import "../styles/add.css";
import { Link } from "react-router-dom";

// single page application

function Add() {
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
              <Link className="nav-link me-5" to="/add">
                Add Recipe
              </Link>
              <Link className="nav-link me-5" to="/profile">
                Profile
              </Link>
            </div>
            <div className="ms-auto">
              <Link to="/login">
                <button type="button" className="btn btn-light me-2">Log In</button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn btn-warning">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </nav >
      {/* <!-- End of Navbar --> */}
      <section id="header">
        <div class="container">
          <div class="row mt-5 justify-content-center">
            <div class="col-8">
              <form>
                <div class="mb-3">
                  {/* <!-- form image --> */}
                  <label for="formFile" class="form-label"></label>
                  <input class="form-control" type="file" id="formFile" />
                </div>
                <div>
                  {/* <!-- form title --> */}
                  <input class="form-control form-control-lg mt-3" type="text" placeholder="Title"
                    aria-label=".form-control-lg example" />
                </div>
                <div>
                  {/* <!-- form ingredients --> */}
                  <label for="Ingredients" class="form-label mt-3"></label>
                  <textarea class="form-control" id="Ingredients" rows="5"
                    placeholder="Ingredients"></textarea>
                </div>
                <div class="mb-3">
                  {/* <!-- form video --> */}
                  <input class="form-control form-control-lg mt-3" type="text" placeholder="Video"
                    aria-label=".form-control-lg example" />
                </div>
                <div class="row mb-3">
                  <div class="d-grid col-4 mx-auto">
                    <button type="submit" class="btn btn-warning btn-lg post">Post</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- footer --> */}
      <footer>
        <div>
          <h2>Eat, Cook, Repeat</h2>
          <p>Share your best recipe by uploading here !</p>

          <div class="footer-link">
            <p>Copyright 2022 by RNH. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Add;