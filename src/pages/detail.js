import React from "react";
import "../styles/detail.css";
import { Link } from "react-router-dom";

// single page application

function Detail() {
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
              <Link to="/">
                <a className="nav-link active me-5" aria-current="page">Home</a>
              </Link>
              <Link to="/add">
                <a className="nav-link me-5">Add Recipe</a>
              </Link>
              <Link to="/profile">
                <a className="nav-link me-5">Profile</a>
              </Link>
            </div>
            <div className="ms-auto">
              <Link to="/login">
                <button type="button" className="btn btn-light">Log In</button>
              </Link>
              <Link to="signup">
                <button type="button" className="btn btn-warning">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </nav >
      {/* <!-- End of Navbar --> */}

      {/* <!-- Content --> */}
      <section id="header">
        {/* <!-- setting margin right & left the page --> */}
        <div className="container mx-lg-auto">
          {/* <!-- Title and Image --> */}
          <div className="row">
            <div className="text-center mt-lg-5 mt-xs-5">
              <h1 className="mb-lg-4 mb-xs-5">Loream Sandwich</h1>
              <img src="./image/detail/detail1.jpg" className="photo" width="600px" height="400px" />
            </div>
          </div>
          {/* <!-- List ingredients --> */}
          <div className="row mt-5">
            <div className="col-lg-6">

              <h2>Ingredients</h2>
              <ul className="list-group">
                <li>2 eggs</li>
                <li>2 tbsp mayonnaise</li>
                <li>3 slices bread</li>
                <li>a little butter</li>
                <li>⅓ carton of cress</li>
                <li>2-3 slices of tomato or a lettuce leaf <br /> and a slice of ham or cheese</li>
                <li>crisps, to serve</li>
              </ul>
            </div>
          </div>
          {/* <!-- video step --> */}
          <div className="mt-5 button">
            <h2>Video Step</h2>
            {/* <!-- Button modal step 1 --> */}
            <div className="row">

              <button type="button" className="btn btn-warning btn-step" data-bs-toggle="modal" data-bs-target="#video1">
                <img src="./image/detail/play.png" alt="" />
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="video1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header align-items-baseline">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Video 1</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/hj5Xv2L2X4M" title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Button modal step 2 --> */}
            <div className="row">

              <button type="button" className="btn btn-warning btn-step" data-bs-toggle="modal" data-bs-target="#video2">
                <img src="./image/detail/play.png" alt="" />
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="video2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header align-items-baseline">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Video 2</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/venrE8gdz30" title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Button modal step 3 --> */}
            <div className="row">

              <button type="button" className="btn btn-warning btn-step" data-bs-toggle="modal" data-bs-target="#video3">
                <img src="./image/detail/play.png" alt="" />
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="video3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header align-items-baseline">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Video 3</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/WpqUOW19aJQ" title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Button modal step 4 --> */}
            <div className="row">
              <button type="button" className="btn btn-warning btn-step" data-bs-toggle="modal" data-bs-target="#video4">
                <img src="./image/detail/play.png" alt="" />
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="video4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header align-items-baseline">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Video 4</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/uPCi5Rs7EuA" title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* <!-- form comments --> */}
          <div className="container mx-2">
            <div className="mt-lg-5 text-center">
              <label for="comment-form" className="form-label"></label>
              <textarea className="form-control" id="comment-form" rows="6">Comments</textarea>
              <button className="btn btn-lg btn-warning mt-3 btn-send">
                <p className="text-center">Send</p>
              </button>
            </div>
          </div>
          {/* <!-- Comments coloumn --> */}
          <div>
            <h2>Comments</h2>
            <div className="row">
              <div className="col-1 ms-lg-5">
                <img src="./image/detail/user.jpg" width="45px" height="45px" className="rounded-circle" />
              </div>
              <div className="col-8 mb-xs-4 ms-4">
                <h5>RachmadNH</h5>
                <p>Nice recipe, delicious and simple, thankyou</p>
              </div>
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
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Detail;