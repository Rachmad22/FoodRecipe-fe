import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/detail.css";
import ModalVideos from "../components/molecules/ModalVideos";
import { useParams } from "react-router-dom";


function Detail() {
  let { name, image } = useParams();

  const step = [
    {
      id : 1,
      title : "video 1",
      video : "https://www.youtube.com/embed/hj5Xv2L2X4M"
    },
    {
      id : 2,
      title : "video 2",
      video : "https://www.youtube.com/embed/venrE8gdz30"
    },
    {
      id : 3,
      title : "video 3",
      video : "https://www.youtube.com/embed/WpqUOW19aJQ"
    },
    {
      id : 4,
      title : "video 4",
      video : "https://www.youtube.com/embed/uPCi5Rs7EuA"
    },
  ]

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
              <img src={image || "/image/detail/detail1.jpg"} alt={image} className="photo" width="600px" height="400px" />
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

              {step.map((item) => (
              <div className="row">
                <ModalVideos
                  video={item?.video}
                  title={item?.title}
                />
                </div>
            ))}
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
                <img src="/image/detail/user.jpg" alt="" width="45px" height="45px" className="rounded-circle" />
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