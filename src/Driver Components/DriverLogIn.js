import React, { useState, useRef } from "react";
import "./DriverHome.css";
import { Link, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../firebaseconfig/firebase"; //User Auth
import GoogleButton from "react-google-button";
//import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import DriverHomePage from "./DriverHomePage";

const DriverLogIn = () => {
  const navigate = useNavigate();

  //set user name and password in local storage
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  //error message
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Email & Password Authentication
  const handleSubmit = () => {
    // console.log(!user.email || !user.password);
    // if (!user.email || !user.password) {
    //   setErrorMsg("Please fill all detials to LogIn");
    //   return;
    // }
    console.log(user);
    debugger;
    setErrorMsg("");
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        debugger;
        
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);

        //navigate("/UserHome");
        //window.location.reload(false); //page refresh
      })
      .catch((err) => console.log("Error", err));

    setUser({
      password: "",
      email: "",
    });
  };

  // User Google Authentication
//   const provider = new GoogleAuthProvider();
//   const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const name = result.user.displayName;
//         const email = result.user.email;

//         localStorage.setItem("name", name);
//         localStorage.setItem("email", email);
//         window.location.reload(false); //page refresh
//       })
//       .catch((err) => console.log("Error", err));
//   };

  return (
    <>
      <div className="container bg-light drive-cont">
        <div className="conatiner drive-log">
          <div class="sidenav">
            <div class="login-main-text">
              <h2>Cab Booking System</h2>
              <p> Driver ...! Login or register from here to access.</p>
            </div>
          </div>
          <div class="main">
            <div class="col-md-6 col-sm-12">
              <div class="login-form">
                <form>
                  <div class="form-group label-driv">
                    <label>User Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      name="email"
                      value={user.email}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div class="form-group my-3 label-driv">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div class="mb-1 error-msg ">{errorMsg}</div>
                  <button
                    type="submit"
                    class="btn btn-secondary my-3"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>

                  <Link
                    to="/DriverRegister"
                    className="cursor-pointer text-green-600 hover:text-green-800"
                  >
                    <div class="mb-1 my-2">
                      <a className="newacc">Create Driver Account</a>
                    </div>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverLogIn;
