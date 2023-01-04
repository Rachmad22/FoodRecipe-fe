import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

// single page application

function Login() {
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
            <section id="login">
                <div className="overlay-background"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 bg-login">
                            <div>
                                <img src="image/logo.png" width="100px" height="100px" />
                                <p className="text-white text-center mt-2">Mama Recipe.</p>
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
                                <div className="d-grid">
                                    <button type="button" className="btn btn-warning btn-lg login">Log In</button>
                                </div>
                                <Link to="/forgot">
                                <a className="forgot">Forgot Password?</a>
                                </Link>
                                <p className="dont-have-account">Don't have an account? <Link to="/signup"><a className="signup"> Sign
                                    Up</a></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;