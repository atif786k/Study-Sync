import React from "react";
import "./Log-Sign.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import firebase from "../Components/Firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Login = (props) => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        props.updateUserState(true);
        console.log("Sign IN successfully..");
        navigate("/");
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleGitHubSignIn = () => {};

  return (
    <>
      {/* <div className="mainBody">
        <div className="log-sign-box animate__animated animate__fadeInUp">
          <h1>
            Welcome Back !<h2>Please enter your account details to logIn</h2>
          </h1>
          <div className="input-fields space-y-2">
            <input
              type="email"
              placeholder="Email"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            />
            <h3>{errorMsg}</h3>
          </div>
          <button onClick={handleSubmission} disabled={buttonDisabled}>
            Log In{" "}
          </button>
          <div className="check-field">
            <label htmlFor="">
              <input type="checkbox" className="check-box mr-2" />
              Remember me
            </label>
            <span>Need help ?</span>
          </div>
          <div className="last-div">
            <span>Doesn't have an account?</span>
            <span className="signin-link">
              <Link to="/signup">Sign Up </Link>
            </span>
          </div>
        </div>
      </div> */}

      <div id="login" className="login-page">
        <div className="login-card">
          <figure className="logo-img">
            <img src="/icons8-book-96.png" alt="" />
          </figure>
          <h1>
            welcome back !<h6>pls enter your details to login</h6>
          </h1>
          <div className="login-btn space-y-2">
            <button onClick={handleGoogleSignIn} className="google same-btn">
              Google <FcGoogle className="ml-2" />
            </button>
            <button
              onClick={handleGitHubSignIn}
              className="github same-btn cursor-not-allowed"
            >
              Github <IoLogoGithub className="ml-2" />
            </button>
            <h4 className="signup-navigate">
              Create an account : <a href="">Sign UP</a>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
