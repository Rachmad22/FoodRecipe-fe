import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// single page application

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  // CHECK IS ALREADY LOGIN
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isSignIn");
    const token = localStorage.getItem("token");

    if (isLogin && token) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <section id="login">
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
            {/* <!-- form login --> */}
            <div className="col-6 form-login">
              <div>
                <h1>Welcome</h1>
                <p>log in into your existing account</p>

                <div className="alert-error">
                  {isError ? (
                    <div
                      class="alert alert-danger text-center ps-0 pe-0"
                      role="alert"
                      style={{
                        fontSize: "14px",
                        border: "0",
                        borderRadius: "15px",
                        marginBottom: "-15px",
                      }}
                    >
                      {errMsg}
                    </div>
                  ) : null}
                </div>

                <div className="mb-lg-3 form-width mb-xs-3">
                  <label for="email-input" className="form-label">Email</label>
                  <input type="email" className="form-control form-control-lg" id="email-input" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3 form-width">
                  <label for="Password-input" className="form-label">Password</label>
                  <input className="form-control form-control-lg form-control-sm" id="password-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      setIsLoading(true);
                      axios
                        .post(
                          `${process.env.REACT_APP_URL_BACKEND}/auth/login`,
                          {
                            email,
                            password,
                          }
                        )
                        .then((res) => {
                          localStorage.setItem("isSignIn", "true");
                          localStorage.setItem(
                            "token",
                            res?.data?.data?.token ?? ""
                          );
                          localStorage.setItem(
                            "profile",
                            JSON.stringify(res?.data?.data?.profile) ?? ""
                          );
                          navigate("/");
                        })
                        .catch((err) => {
                          setIsError(true);
                          //  console.log(setErrMsg(err));
                          if (err?.response?.data?.message?.email?.message) {
                            setErrMsg(
                              err?.response?.data?.message?.email?.message ??
                              "System error, please try again later."
                            );
                          } else if (
                            err?.response?.data?.message?.password?.message
                          ) {
                            setErrMsg(
                              err?.response?.data?.message?.password?.message ??
                              "System error, please try again later."
                            );
                          } else {
                            setErrMsg(
                              err?.response?.data?.message ??
                              "System error, please try again later."
                            );
                          }
                        })
                        .finally(() => setIsLoading(false));
                    }
                  }}
                  />
                </div>
                <div className="form-lg-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-lg-check-label" for="flexCheckDefault">
                    I agree to terms & conditions
                  </label>
                </div>

                {/* <!-- button login & accessories --> */}
                <Link to="" className="text-decoration-none">
                  <div className="d-grid">
                    <button type="button" className="btn btn-warning btn-lg login" disabled={isLoading}
                      onClick={() => {
                        setIsLoading(true);
                        axios
                          .post(
                            `${process.env.REACT_APP_URL_BACKEND}/auth/login`,
                            {
                              email,
                              password,
                            }
                          )
                          .then((res) => {
                            localStorage.setItem("isSignIn", "true");
                            localStorage.setItem(
                              "token",
                              res?.data?.data?.token ?? ""
                            );
                            localStorage.setItem(
                              "profile",
                              JSON.stringify(res?.data?.data?.profile) ?? ""
                            );
                            navigate("/");
                          })
                          .catch((err) => {
                            setIsError(true);
                            console.log(setErrMsg(err));
                            if (err?.response?.data?.message?.email?.message) {
                              setErrMsg(
                                err?.response?.data?.message?.email?.message ??
                                "System error, please try again later."
                              );
                            } else if (
                              err?.response?.data?.message?.password?.message
                            ) {
                              setErrMsg(
                                err?.response?.data?.message?.password?.message ??
                                "System error, please try again later."
                              );
                            } else {
                              setErrMsg(
                                err?.response?.data?.message ??
                                "System error, please try again later."
                              );
                            }
                          })
                          .finally(() => setIsLoading(false));
                      }}
                    >
                      {isLoading ? "Loading.." : "Log In"}</button>
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