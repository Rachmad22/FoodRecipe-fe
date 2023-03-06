import React from "react";
import "../styles/home.css";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import RecipeCard from "../components/molecules/RecipeCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as recipeReducer from "../store/recipe/Index";
import axios from "axios";


function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let [menu, setMenu] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState(true);

  const url =menu?.[0]?.name?.toLocaleLowerCase()?.split(" ").join("_")


  // GET recipes
  React.useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/recipes`)
      .then((res) => {
        // console.log(res?.data?.data);
        setMenu(res?.data?.data);

        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setMenu([]);
      });
  }, []);


  return (
    <div>
      {/* <!-- Start Navbar --> */}
      <Navbar />
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
          <h2 className="title">Best Recipe</h2>
        </div>

        {/* <!-- background --> */}
        <div className="background-overlay"></div>

        {/* <!-- content --> */}
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- side left --> */}
            <div className="col-lg-6 col-xs-12">
              <img src={menu?.[0]?.photo || "https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg"} alt="new" width="100%" height="500px" className="main-image" />
            </div>
            {/* <!-- side right --> */}
            <div className="col-lg-5 offset-lg-1 col-xs-12 mt-xs-5">
              <h2 className="recipe-title">
                {menu?.[0]?.name?.toLocaleUpperCase() || `Healthy Bone Broth Ramen`} <br />
                (Quick & Easy)
              </h2>

              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
                hurry? That’s right!
              </p>
              <div onClick={() => {
                axios
                  .get(`${process.env.REACT_APP_URL_BACKEND}/recipes/${url}`)
                  .then(({ data }) => {
                    dispatch(
                      recipeReducer.setDetail({
                        data: data?.data?.[0],
                        slug: url,
                      })
                    );
                    navigate(`/detail/${url}`);
                  });
              }}>
                <button type="button" className="btn btn-warning">See More</button>
              </div>
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
          {/* if loading = loading animation, else null */}
          {isLoading ?
            <main id="container">

              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <div className="dots2">
                <div className="dot2"></div>
                <div className="dot2"></div>
                <div className="dot2"></div>
                <div className="dot2"></div>
                <div className="dot2"></div>
                <div className="dot2"></div>
                <div className="dot2"></div>
                <div className="dot2"></div>
                <div className="dot2"></div>
                <div className="dot2"></div>
              </div>
              <div className="circle"></div>
            </main>
            : null}

          {menu.length === 0 && !isLoading ? <h2>Recipe not found</h2> : null}

          {/* <!-- recipe list --> */}
          <div className="row">
            {menu.slice(0, 6).map((item, key) => (
              <div className="col-lg-4 col-6" key={key}>
                <RecipeCard
                  photo={item?.photo}
                  name={item?.name}
                  url={item?.name?.toLocaleLowerCase()?.split(" ").join("_")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!--end of popular recipe-- > */}

      {/* < !--footer --> */}
      <Footer />
    </div>
  );
}

export default Home;