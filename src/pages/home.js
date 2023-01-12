import React from "react";
import "../styles/home.css";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import RecipeCard from "../components/molecules/RecipeCard";
import SpinnerGroup from "../components/molecules/SpinnerGroup";
import { Link } from "react-router-dom";

// const menu = [
//   {
//     id: 1,
//     name: "Chicken Kare",
//     image: "/image/home/recipe-1.webp",
//   },
//   {
//     id: 2,
//     name: "Bomb Chicken",
//     image: "/image/home/recipe-2.webp",
//   },
//   {
//     id: 3,
//     name: "Banana Smothie Pop",
//     image: "/image/home/recipe-3.webp",
//   },
//   {
//     id: 4,
//     name: "Coffee Lava Cake",
//     image: "/image/home/recipe-4.webp",
//   },
//   {
//     id: 5,
//     name: "Sugar Salmon",
//     image: "/image/home/recipe-5.webp",
//   },
//   {
//     id: 6,
//     name: "India Salad",
//     image: "/image/home/recipe-6.webp",
//   },
// ];

function Home() {
  let [menu, setMenu] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState(true);


  // set feature loading 
  React.useEffect(()=>{
    // remove loading animation
    setIsLoading(false);
    // present popular recipe data
    setMenu([
      {
        id: 1,
        name: "Chicken Kare",
        image: "/image/home/recipe-1.webp",
      },
      {
        id: 2,
        name: "Bomb Chicken",
        image: "/image/home/recipe-2.webp",
      },
      {
        id: 3,
        name: "Banana Smothie Pop",
        image: "/image/home/recipe-3.webp",
      },
      {
        id: 4,
        name: "Coffee Lava Cake",
        image: "/image/home/recipe-4.webp",
      },
      {
        id: 5,
        name: "Sugar Salmon",
        image: "/image/home/recipe-5.webp",
      },
      {
        id: 6,
        name: "India Salad",
        image: "/image/home/recipe-6.webp",
      },
    ])
  })
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
          <h2 className="title">New Recipe</h2>
        </div>

        {/* <!-- background --> */}
        <div className="background-overlay"></div>

        {/* <!-- content --> */}
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- side left --> */}
            <div className="col-lg-6 col-xs-12">
              <img src="./image/home/new-recipe.webp" alt="new" width="100%" height="500px" className="main-image" />
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
{/* if loading = loading animation, else null */}
          {isLoading ? <SpinnerGroup /> : null}
          
          {menu.length === 0 && !isLoading ? <h2>Recipe not found</h2> : null}

          {/* <!-- recipe list --> */}
          <div className="row">
          {menu.map((item) => (
              <div className="col-lg-4 col-6">
                <RecipeCard
                  image={item?.image}
                  name={item?.name}
                  url={item?.name?.toLocaleLowerCase()?.split(" ").join("-")}
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