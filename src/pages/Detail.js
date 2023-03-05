import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/detail.css";
import ModalVideos from "../components/molecules/ModalVideos";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Detail() {
  const navigate = useNavigate();
  const { recipe } = useSelector((state) => state);

  const recipeIngredient = recipe?.data?.ingredient?.split(",")
  // var output = [videoLink.slice(0, pos), chr, str.slice(pos)].join('');

  // console.log(videoLink);
  React.useEffect(() => {
    if (!recipe?.data) {
      navigate("/");
    }
  }, []);



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
              <h1 className="text-black mb-lg-4 mb-xs-5">{recipe?.data?.name?.toLocaleUpperCase() || "Loream Sandwich"}</h1>
              <img src={recipe?.data?.photo || "/image/detail/detail1.jpg"} alt={recipe?.data?.name} className="photo" width="600px" height="400px" />
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
                <li>{recipeIngredient?.[0]}</li>
                <li>{recipeIngredient?.[1]}</li>
                <li>{recipeIngredient?.[2]}</li>
                <li>{recipeIngredient?.[3] || "a little butter"}</li>
                <li>{recipeIngredient?.[4] || "⅓ carton of cress"}</li>
                <li>{recipeIngredient?.[5] || "2-3 slices of tomato or a lettuce leaf "}</li>
                <li>{recipeIngredient?.[6] || "crisps, to serve"}</li>
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
              {/* <!-- Button modal --> */}

                  <div className="row">
                    <ModalVideos />
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