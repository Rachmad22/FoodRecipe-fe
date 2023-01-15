import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/add.css";
import { useNavigate } from "react-router-dom";


function Add() {
  const navigate = useNavigate();

  // check if already login
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token");

    if (!isLogin && !token) {
      navigate("/login"); // navigate to home
    }
  }, []);
  return (
    <div>
      {/* <!-- Start Navbar --> */}
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default Add;