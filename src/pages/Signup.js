import React from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";

// single page application

function Signup() {

  return (
    <div>
      <section id="signup">
          <div className="overlay-background"></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 bg-login">
                <div className="logo">
                  <img src="image/logo.png" alt="logo" width="100px" height="100px" />
                </div>
                <div className="mama">
                  <p>Mama Recipe.</p>
                </div>
              </div>
            <div class="col-6 mt-5 form-signup">
              <div>
                <h1>Let's Get Started !</h1>
                <p>Create new account to access all features</p>
                <div class="mb-3 form-width">
                  <label for="name-input" class="form-label">Name</label>
                  <input class="form-control form-control-lg" id="name-input" placeholder="Name" />
                </div>
                <div class="mb-3 form-width">
                  <label for="email-input" class="form-label">Email address</label>
                  <input type="email" class="form-control form-control-lg" id="email-input"
                    placeholder="Enter email address" />
                </div>
                <div class="mb-3 form-width">
                  <label for="phone-input" class="form-label">Phone Number</label>
                  <input class="form-control form-control-lg" id="phone-input" placeholder="08xxxxxxxxx" />
                </div>
                <div class="mb-3 form-width">
                  <label for="create-password-input" class="form-label">Create new password</label>
                  <input class="form-control form-control-lg" id="create-password-input" placeholder="Create new password" />
                </div>
                <div class="mb-3 form-width">
                  <label for="new-Password-input" class="form-label">New Password</label>
                  <input class="form-control form-control-lg" id="new-password-input" placeholder="New Password" />
                </div>
                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      I agree to terms & conditions
                    </label>
                </div>
                <div class="d-grid">
                  <button type="button" class="btn btn-warning btn-lg regis">Register Account</button>
                </div>
                <p class="already-have-account">Already have account? <Link to="/login" class="login">
                  Log In Here
                  </Link>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;