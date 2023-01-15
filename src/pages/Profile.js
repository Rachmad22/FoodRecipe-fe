import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/profile.css";
import { useNavigate } from "react-router-dom";

// single page application

function Profile(props) {
  const navigate = useNavigate();
  const checkProfile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  const [profile, setProfile] = React.useState(checkProfile);

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
      {/* <!-- Avatar --> */}
      <section>
        <div className="container content">
          <div className="row">
            <div className="col text-center">
              <a href="profile.html" className="text-decoration-none">
                <img src={profile?.photo} alt="pp" className="rounded-circle avatar" />
                <h5 className="image-title text-black fw-bold">{profile?.name}</h5>
              </a>
            </div>
          </div>

          {/* <!-- Navbar profile --> */}
          <div className="row mt-5">
            <div className="col">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <div id="navbar-profile">
                    <div className="navbar-nav">
                      <a href="" className="nav-link active fw-bolder me-lg-4" aria-current="page">My Recipe</a>
                      <a href="" className="nav-link fw-bolder me-lg-4" >Saved Recipe</a>
                      <a href="" className="nav-link fw-bolder me-lg-4" >Liked Recipe</a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* <!-- thumbnail profile --> */}
          <div className="row mt-4 mb-4" id="myrecipe">
            <div className="col-lg-3 position-static">
              <a href="/detail">
                <img src="./image/profile/photo1.jpg" alt="myrecipe" width="100%" height="175px" className="thumbnail" />
                </a>
            </div>
            <div className="col-lg-3 position-static thumbnail">
              <a href="/detail">
                <img src="./image/profile/photo2.jpg" alt="myrecipe" width="100%" height="175px" className="thumbnail" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}

export default Profile;