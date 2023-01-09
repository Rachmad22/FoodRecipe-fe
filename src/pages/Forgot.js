import React from "react";
import "../styles/forgot.css";

// single page application

function Forgot() {

    return (
        <div>
    <section id="forgot">
        <div class="container">
            <div class="row">
                <div class="col-6 bg-forgot">
                    <div>
                        <img src="image/logo.png" width="100px" height="100px" />
                        <p class="text-white text-center mt-2">Mama Recipe.</p>
                    </div>
                </div>
                <div class="col-6 form-forgot">
                    <div>
                        <h1>Forgot Password?</h1>
                        <p class="mb-0">We just need your registered email address <br /> to send your password resend</p>
                        <div class="mb-3 form-width">
                            <label for="email-input" class="form-label">Email</label>
                            <input type="email" class="form-control form-control-lg" id="email-input"
                                placeholder="Examplexxx@gmail.com" />
                        </div>
                        <div class="d-grid">
                            <button type="button" class="btn btn-warning btn-lg forgot">Send E-mail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    );
    }

    export default Forgot;