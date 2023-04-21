import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../Contexts/AuthContext";
import { auth } from "../Firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); //use to navigate from one page to another

  const [allEntry, setAllEntry] = useState([]); // to store the data of user

  //For firebase login purpose auth wala hai yha se

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = (e) => {
    e.preventDefault(); // to stop the reload the form
    const newEntry = { email: email, password: password };
    console.log(newEntry);
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
    //navigate("/dashboard"); //this navigate this from login page to dashboard page which is just use for demo purpose

    //yh login ye auth wala hai
   
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        <div
          style={{
            position: "absolute",
            // #000716 ye use hoga '#0d6efd' ishke place pe to  black ho jayega
            backgroundColor: "#0d6efd",
            height: "62%",
            clipPath: "polygon(100% 52%, 0% 100%, 0% 0%, 100% 0%)",
            overflow: "hidden",
            left: 0,
            right: 0,
            top: 0,
          }}
        />
        <form action="" onSubmit={submitForm}>
          <section className="vh-100 login-custom">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card shadow-2-strong">
                    <div className="card-bodyy p-5 text-center">
                      <img
                        className="d-flex m-auto pb-3 img"
                        src="logo.png"
                        alt="logo"
                      />
                      <div className="card-title h5">
                        <h2>Login</h2>
                      </div>

                      <form className="d-flex flex-column align-items-center w-100 p-1" />
                      <div className="mb-4 w-100">
                        <label className="form-label" htmlFor="formBasicEmail">
                          Email address
                        </label>
                        <input
                          placeholder="Enter email"
                          type="email"
                          id="formBasicEmail"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-4 w-100">
                        <label
                          className="form-label"
                          htmlFor="formBasicPassword"
                        >
                          Password
                        </label>
                        <input
                          placeholder="Password"
                          type="password"
                          id="formBasicPassword"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}
