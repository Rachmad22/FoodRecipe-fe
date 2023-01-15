import React from "react";
import "../styles/login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// single page application

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  // check if already login
  React.useEffect(() => {
    // axios
    // .get(`${process.env.REACT_APP_URL_BACKEND}`)
    // .then((res)=>console.log(res))
    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token");

    if (isLogin && token) {
      navigate("/"); // navigate to home
    }
  }, []);

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

                {isError ? (
                  <div class="alert alert-danger" role="alert">
                    {errMsg}
                  </div>
                ) : null}

                <div className="mb-lg-3 form-width mb-xs-3">
                  <label for="email-input" className="form-label">Email</label>
                  <input type="email" className="form-control form-control-lg" id="email-input" placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="mb-3 form-width">
                  <label for="Password-input" className="form-label">Password</label>
                  <input className="form-control form-control-lg form-control-sm" id="password-input" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="form-lg-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-lg-check-label" for="flexCheckDefault">
                    I agree to terms & conditions
                  </label>
                </div>
                {/* <!-- button login & accessories --> */}
                  <div className="d-grid">
                    <button type="button" className="btn btn-warning btn-lg login" disabled={isLoading}
                      onClick={() => {
                        setIsLoading(true);
                        axios
                          .post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, {
                            email,
                            password,
                          })
                          .then((res) => {
                            localStorage.setItem("isLogin", "true");
                            localStorage.setItem(
                              "token",
                              res?.data?.data?.token ?? ""
                            );
                            localStorage.setItem(
                              "profile",
                              JSON.stringify(res?.data?.data?.profile)
                            );
                            navigate("/"); // navigate to home
                          })
                          .catch((err) => {
                            setIsError(true);
                            setErrMsg(
                              err?.response?.data?.message ??
                              "System error, try again later."
                            );
                          })
                          .finally(() => setIsLoading(false));
                      }}
                    >
                      {isLoading ? "Loading..." : "Log in"}</button>
                  </div>
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