import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

// single page application

function Home() {
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

      {/* < !--header --> */}
      <section id="header">
        {/* <!-- background yellow --> */}
        <div className="overlay-background"></div>

        {/* <!-- content --> */}
        <div className="container content">
          <div className="row align-items-center">
            {/* <!-- side left --> */}
            <div className="col-lg-5 col-xs-12 order-1 order-lg-0">
              <h1>Discover Recipe & Delicious Food</h1>
              <div className="mt-4 mb-xs-5">
                <input type="text" className="form-control form-control-lg" id="form-search" placeholder="search recipe..." />
              </div>
            </div>
            {/* <!-- side right --> */}
            <div className="col-lg-6 col-xs-12 offset-lg-1 background-grid order-0 order-lg-1">
              <img src="./image/home/header-1.png" className="main-background" width="600px" />
              {/* <!-- background header --> */}
              <img src="./image/home/background-header-1.png" className="background-1" width="500px" />
              <img src="./image/home/background-header-2.png" className="background-2" width="500px" />
            </div>
          </div>
        </div>
      </section>
      {/* <!--end of header-- > */}

      {/* < !--new recipe --> */}
      <section id="new-recipe">
        {/* <!-- title --> */}
        <div className="container">
          <h2 className="title">New Recipe</h2>
        </div>

        {/* <!-- background --> */}
        <div className="background-overlay"></div>
        {/* <!-- content --> */}
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- side left --> */}
            <div className="col-lg-6 col-xs-12">
              <img src="./image/home/new-recipe.jpg" width="100%" height="500px" className="main-image" />
            </div>
            {/* <!-- side right --> */}
            <div className="col-lg-5 offset-lg-1 col-xs-12 mt-xs-5">
              <h2 className="recipe-title">
                Healthy Bone Broth Ramen <br />
                (Quick & Easy)
              </h2>

              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
                hurry? That’s right!
              </p>
              <Link to="/detail">
                <button type="button" className="btn btn-warning">See More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!--end of new recipe-- > */}

      {/* < !--popular recipe-- > */}
      <section id="popular-recipe">
        <div className="container">
          {/* <!-- title --> */}
          <div className="container">
            <h2 className="title">Popular Recipe</h2>
          </div>

          {/* <!-- recipe list --> */}
          <div className="row">
            <div className="col-lg-4 col-6 mb-3">
              <div className="clickable-image">
                <Link to="/detail">
                  <img src="./image/home/recipe-1.jpg" height="100%" width="100%" className="img-recipe" />
                  <h2 className="image-title text-black">
                    Chicken Kare
                  </h2>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-6 mb-3">
              <div className="clickable-image">
                <Link to="/detail">
                  <img src="./image/home/recipe-2.jpg" height="100%" width="100%" className="img-recipe" />
                  <h2 className="image-title text-black">
                    Bomb Chicken
                  </h2>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-6 mb-3">
              <div className="clickable-image">
                <Link to="/detail">
                  <img src="./image/home/recipe-3.png" height="100%" width="100%" className="img-recipe" />
                  <h2 className="image-title text-black">
                    Banana Smothie Pop
                  </h2>
                </Link>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4 col-6 mb-3">
                <div className="clickable-image">
                  <Link to="/detail">
                    <img src="./image/home/recipe-4.jpg" height="100%" width="100%" className="img-recipe" />
                    <h2 className="image-title text-black">
                      Coffee Lava Cake
                    </h2>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-6 mb-3">
                <div className="clickable-image">
                  <Link to="/detail">
                    <img src="./image/home/recipe-5.jpg" height="100%" width="100%" className="img-recipe" />
                    <h2 className="image-title text-black">
                      Sugar Salmon
                    </h2>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="clickable-image">
                  <Link to="/detail">
                    <img src="./image/home/recipe-6.jpg" height="100%" width="100%" className="img-recipe" />
                    <h2 className="image-title text-black">
                      Indian Salad
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--end of popular recipe-- > */}

      {/* < !--footer --> */}
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

export default Home;