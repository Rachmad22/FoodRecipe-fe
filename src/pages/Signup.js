import React from "react";
import "../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// single page application

function Signup() {
  const navigate = useNavigate()
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [errMsg, setErrMsg] = React.useState("");
  const [okeMsg, setOkeMsg] = React.useState("");

  // console.log(okeMsg)
  // console.log(errMsg[0])

  const handleSignup = async () => {
    await axios.post(`${process.env.REACT_APP_URL_BACKEND}/auth/signup`, {
      name,
      email,
      password,
      phone,
    })
      .then((res) => {
        setIsSuccess(true)
        // console.log(res?.data?.message)
        setOkeMsg(res?.data?.message)
        navigate("/login")
      })
      .catch((err) => {
        setIsError(true)
        // console.log(err?.response?.data?.message)
        setErrMsg(err?.response?.data?.message ?? err?.response?.data?.message?.name?.message ?? err?.response?.data?.message?.email?.message ?? err?.response?.data?.message?.phone?.message ?? err?.response?.data?.message?.password?.message ?? "Something wrong with our server")
      })
  }


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
                <div class="mb-2 form-width">


                    {isError ? (
                      <div
                        class="alert alert-danger text-center ps-0 pe-0 mb-2"
                        role="alert"
                        style={{
                          fontSize: "14px",
                          border: "0",
                          borderRadius: "15px",
                          // marginBottom: "-15px",
                        }}
                      >
                        {errMsg}
                      </div>
                    ) : null}

                    {isSuccess ? (
                      <div
                        class="alert alert-success text-center ps-0 pe-0 mb-2"
                        role="alert"
                        style={{
                          fontSize: "14px",
                          border: "0",
                          borderRadius: "15px",
                          // marginTop: "-15px",
                        }}
                      >
                        {okeMsg}
                      </div>
                    ) : null}

                    <label for="name-input" class="form-label">Name</label>
                    <input type="text" class="form-control form-control-lg" id="name-input" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div class="mb-3 form-width">
                    <label for="email-input" class="form-label">Email address</label>
                    <input type="email" class="form-control form-control-lg" id="email-input"
                      placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div class="mb-3 form-width">
                    <label for="phone-input" class="form-label">Phone Number</label>
                    <input class="form-control form-control-lg" type="number" id="phone-input" placeholder="08xxxxxxxxx" onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div class="mb-3 form-width">
                    <label for="create-password-input" class="form-label">Create new password</label>
                    <input class="form-control form-control-lg" id="create-password-input" placeholder="Create new password" type="password" />
                  </div>
                  <div class="mb-3 form-width">
                    <label for="new-Password-input" class="form-label">New Password</label>
                    <input class="form-control form-control-lg" id="new-password-input" type="password" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      I agree to terms & conditions
                    </label>
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-warning btn-lg regis" onClick={handleSignup}>Register Account</button>
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