import React from "react";
import "../styles/home.css";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import RecipeCard from "../components/molecules/RecipeCard";
import SpinnerGroup from "../components/molecules/SpinnerGroup";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

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
  let [currentPage, setCurrentPage] = React.useState(1);
  let [totalPage, setTotalPage] = React.useState(1);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/recipe?limit=6&page=1`)
      .then(({ data }) => {
        let countPagination = parseInt(data?.pagination_all?.[0]?.count) / 6;
        setMenu(data?.data);
        setTotalPage(countPagination);
      })
      .catch(() => setMenu([]))
      .finally(() => setIsLoading(false));
  }, []);

  const fetchPagination = (pageParam) => {
    setIsLoading(true);
    setMenu([]);
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipe?limit=6&page=${pageParam}`
      )
      .then(({ data }) => {
        let countPagination = parseInt(data?.pagination_all?.[0]?.count) / 6;
        setMenu(data?.data);
        setTotalPage(countPagination);
        setCurrentPage(pageParam);
      })
      .catch(() => setMenu([]))
      .finally(() => setIsLoading(false));
  };

  // set feature loading 
  // React.useEffect(()=>{
  //   // remove loading animation
  //   setIsLoading(false);
  //   // present popular recipe data
  //     setMenu([
  //       {
  //       id: 1,
  //       name: "Chicken Kare",
  //       image: "/image/home/recipe-1.webp",
  //     },
  //     {
  //       id: 2,
  //       name: "Bomb Chicken",
  //       image: "/image/home/recipe-2.webp",
  //     },
  //     {
  //       id: 3,
  //       name: "Banana Smothie Pop",
  //       image: "/image/home/recipe-3.webp",
  //     },
  //     {
  //       id: 4,
  //       name: "Coffee Lava Cake",
  //       image: "/image/home/recipe-4.webp",
  //     },
  //     {
  //       id: 5,
  //       name: "Sugar Salmon",
  //       image: "/image/home/recipe-5.webp",
  //     },
  //     {
  //       id: 6,
  //       name: "India Salad",
  //       image: "/image/home/recipe-6.webp",
  //     },
  //   ])
  // })
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
            {menu.map((item, key) => (
              <div className="col-lg-4 col-6" key={key}>
                <RecipeCard
                  image={item?.image}
                  name={item?.name}
                  url={item?.name?.toLocaleLowerCase()?.split(" ").join("-")}
                />
              </div>
            ))}
          </div>
        </div>
        {!isLoading && (
          <div className="container">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a
                    className={`page-link ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                    onClick={() => {
                      if (currentPage > 1) fetchPagination(currentPage - 1);
                    }}
                  >
                    Previous
                  </a>
                </li>
                {[...new Array(totalPage)].map((item, key) => {
                  let position = ++key;
                  return (
                    <li className="page-item" key={key}>
                      <a
                        className={`page-link ${
                          currentPage === position ? "active" : ""
                        }`}
                        onClick={() => {
                          fetchPagination(position);
                        }}
                      >
                        {position}
                      </a>
                    </li>
                  );
                })}
                <li class="page-item">
                  <a
                    class={`page-link ${
                      currentPage === totalPage ? "disabled" : ""
                    }`}
                    onClick={() => {
                      if (currentPage < totalPage)
                        fetchPagination(currentPage + 1);
                    }}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </section>
      {/* <!--end of popular recipe-- > */}

      {/* < !--footer --> */}
      <Footer />
    </div>
  );
}

export default Home;