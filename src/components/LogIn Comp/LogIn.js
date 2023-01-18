import React, { useState} from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./LogIn.css";
import taxi2 from "../../assets/taxi 2.png";
import { Link,  useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig/firebase"; //User Auth
import GoogleButton from "react-google-button";
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth"




const LogIn = () => {
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
   
    if (!user.email || !user.password )
    {
      setErrorMsg("Please fill all detials to LogIn");
      return;
    }
    setErrorMsg("");
    signInWithEmailAndPassword(auth, user.email, user.password)
  
      .then((res) => {
        
        
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);

        navigate("/");
        window.location.reload(false); //page refresh
       
      })
      .catch((err) => console.log("Error", err));

    setUser({
      password: "",
      email: "",
    })
    .catch((err) => console.log("Error", err));
  
   
  };
  const handleDriver = () => {
    navigate("/Home");
  }
  // User Google Authentication 
  const provider = new GoogleAuthProvider();
  const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      const name = result.user.displayName;
      const email = result.user.email;

      localStorage.setItem("name" , name)
      localStorage.setItem("email" , email)
      window.location.reload(false);   //page refresh
     


    }).catch((err) => console.log("Error", err));
  }


  return (
    <>

   
      <div
       class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content login-model">
            <div class="modal-header model-head">
              <h5 class="modal-title model-title" id="exampleModalLabel">
                CAB BOOKING SYSTEM
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="conatiner">
                <MDBContainer fluid className="p-3 my-5">
                  <MDBRow>
                    <MDBCol col="10" md="6">
                      <img src={taxi2} class="img-fluid" alt="Phone image" />
                    </MDBCol>

                    <MDBCol col="4" md="6">
                      <div className="container">
                        <div className="card log-card">
                          <div className="inner_card">
                            <div className="mb-1">
                              <input
                                type="text"
                                className="form-control input-field"
                                id="formGroupExampleInput"
                                placeholder="Email"
                                name="email"
                                value={user.email}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div class="mb-1">
                              <input
                                type="password"
                                className="form-control my-4 input-field"
                                id="formGroupExampleInput2"
                                placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div class="mb-1 error-msg ">{errorMsg}</div>
                            <div class="mb-1 my-2">
                              <button
                                type="button"
                                className="btn btn-outline-primary"
                                data-bs-dismiss="modal"
                                onClick={handleSubmit}
                              >
                               <i class="bi bi-person"></i>
                              </button>
                              
                              <button
                                type="button"
                                className="btn btn-outline-success mx-3"
                                data-bs-dismiss="modal"
                                onClick={handleDriver}                                
                              >
                               <i class="bi bi-car-front"></i>
                              </button>
                              
                            </div>
                           
                             
                            
                            <div className="mb-1">
                              <Link
                                to="/Register"
                                className="cursor-pointer text-green-600 hover:text-green-800"
                              >
                                <div class="mb-1 my-2 ">
                                  <a className="newacc" >Create New Account</a>
                                </div>
                              </Link>
                              <Link
                                to="/DriverRegister"
                                className="cursor-pointer text-green-600 hover:text-green-800"
                              >
                                <div class="mb-1 my-2">
                                  <a className="newacc"  >Create Driver Account</a>
                                </div>
                              </Link>
                              <div className="conatiner my-4">
                                
                                <GoogleButton
                                  className="rounded"
                                  onClick={signInWithGoogle}
                                  
                                />
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default LogIn;
