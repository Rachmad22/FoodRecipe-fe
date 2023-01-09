import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/detail.css";
import { useParams } from "react-router-dom";

// single page application

function Detail() {
  let { name } = useParams();
  return (
    <div>
      {/* <!-- Start Navbar --> */}
      <Navbar />
      {/* <!-- End of Navbar --> */}

      {/* <!-- Content --> */}
      <section id="header">
        <div className="container">
          {/* <!-- Title and Image --> */}
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="text-black mb-lg-4 mb-xs-5">{name || "Loream Sandwich"}</h1>
              <img src="./image/detail/detail1.jpg" className="photo" width="600px" height="400px" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- List ingredients --> */}
      <section>
        <div className="container">
          <div className="row">
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
        </div>
      </section>
      {/* <!-- video step --> */}
      <section id="video">
        <div className="container">
          <div className="row mt-lg-5 button">
            <div classNameName="col-lg-4">
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
          </div>
        </div>
      </section>
      {/* <!-- form comments --> */}
      <section>
        <div className="container mx-auto">
          <div className="mt-lg-5 text-center">
            <label for="comment-form" className="form-label"></label>
            <textarea className="form-control" id="comment-form" rows="6">Comments</textarea>
            <button className="btn btn-lg btn-warning mt-3 btn-send">
              <p className="text-center">Send</p>
            </button>
          </div>
          {/* <!-- Comments coloumn --> */}
          <div>
            <h2>Comments</h2>
            <div className="row mt-2">
              <div className="col-1 ms-lg-5">
                <img src="./image/detail/user.jpg" width="45px" height="45px" className="rounded-circle" />
              </div>
              <div className="col-8 ms-4 mb-lg-5 mb-xs-4">
                <h5>RachmadNH</h5>
                <p>Nice recipe, delicious and simple, thankyou</p>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- end of footer --> */}
    </div >
  );
}

export default Detail;