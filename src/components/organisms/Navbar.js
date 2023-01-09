import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
    </div>
  );
}

export default Navbar;