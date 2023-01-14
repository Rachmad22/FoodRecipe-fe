import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

// single page application

function Login() {

  return (
    <div>
      <section id="login">
          <div className="container-fluid">
            <div className="row">
          <div className="overlay-background"></div>
              <div className="col-6 bg-login">
                <div>
                  <div className="logo">
                  <img src="image/logo.png" className="index" alt="logo" width="100px" height="100px" />
                  </div>
                <div className="mama">
                  <p className="index">Mama Recipe.</p>
                </div>
                </div>
              </div>
            {/* <!-- form login --> */}
            <div className="col-6 form-login">
              <div>
                <h1>Welcome</h1>
                <p>log in into your existing account</p>
                <div className="mb-lg-3 form-width mb-xs-3">
                  <label for="email-input" className="form-label">Email</label>
                  <input type="email" className="form-control form-control-lg" id="email-input" placeholder="Enter your email" />
                </div>
                <div className="mb-3 form-width">
                  <label for="Password-input" className="form-label">Password</label>
                  <input className="form-control form-control-lg form-control-sm" id="password-input" placeholder="Password" />
                </div>
                <div className="form-lg-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-lg-check-label" for="flexCheckDefault">
                    I agree to terms & conditions
                  </label>
                </div>
                {/* <!-- button login & accessories --> */}
                <Link to="/" className="text-decoration-none">
                  <div className="d-grid">
                    <button type="button" className="btn btn-warning btn-lg login">Log In</button>
                  </div></Link>
                <Link to="/forgot" className="forgot">
                  Forgot Password?
                </Link>
                <p className="dont-have-account">Don't have an account? <Link to="/signup" className="signup">Sign
                  Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;