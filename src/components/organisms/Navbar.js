import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
 const checkProfile = localStorage.getItem("profile")
  ? JSON.parse(localStorage.getItem("profile"))
  : null;
 const [isSignIn, setIsSignIn] = React.useState(
  localStorage.getItem("isSignIn")
 );

 const [profile, setProfile] = React.useState(checkProfile);
 // console.log(profile?.photo)

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
       <Link className="nav-link me-5" to="/add">
        Add Recipe
       </Link>
       <Link className="nav-link me-5" to="/profile">
        Profile
       </Link>
      </div>
      <div className="ms-auto">
       {isSignIn ? (
        <div className="dropdown-center">
         <img src={profile?.photo || `https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg`} alt="" style={{ borderRadius: "50%", height: "50px", width: "50px" }} data-bs-toggle="dropdown" aria-expanded="false" />
         <ul
          className="dropdown-menu text-center"
         >
          <li>
           <Link to="/profile" className="text-decoration-none dropdown-item">Profile</Link>
          </li>
          <li>
           <Link to="/logout" className="text-decoration-none dropdown-item">Logout</Link>
          </li>
         </ul>
        </div>
       ) : (
        <>
         <Link to="/login">
          <button type="button" className="btn btn-light me-2">Log In</button>
         </Link>
         <Link to="/signup">
          <button type="button" className="btn btn-warning">Sign Up</button>
         </Link>
        </>
       )}
      </div>
     </div>
    </div>
   </nav >
  </div>
 );
}

export default Navbar;