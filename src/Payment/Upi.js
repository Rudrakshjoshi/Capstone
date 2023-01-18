import React from "react";
import { Row } from "react-bootstrap";
import "./Demopay.css";
import styles from "./PaymentsPage.module.css";
// import PhonePe from "./assets/PhonePe.png";
// import GPay from "./assets/GPay.png";
// import Paytm from "./assets/Paytm.png";
import paytym from "../assets/paytym.png"
import GPay from "../assets/GPay.png"
import PhonePe from "../assets/PhonePe.png"
import { FaAlignRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Upi = () => {
  const navigate = useNavigate();
  const successRedirect=()=>{ // card redire
    navigate("/Success");
   }
  return (
    <div className="container1 d-lg-flex"  style={{width:"524px"}}>
      <div className="box-22">
        <div className="box-inner-2">
          <div>
            <p className="fw-bold">Payment Details</p>
            <p className="dis mb-3">
              Complete your Booking by providing your payment details
            </p>
          </div>
          <form action="">
            {/* radio button start */}

            <div className="radiobtn">
              <input type="radio" name="box" id="one" />
              <input type="radio" name="box" id="two" />
              <input type="radio" name="box" id="three" />
              <label htmlFor="one" className="box py-2 first">
                <div className="">
                  {/* <div className='align-items-start col-4'> */}
                  <span className="circle" />
                  <div className="course">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="fw-bold">
                        <img src={GPay} className="pic box-4" width={30}  />
                      </span>
                    </div>
                  </div>
                </div>
              </label>
              <span> </span>
              <label htmlFor="two" className="box py-2 second">
                <div className="">
                  <span className="circle" />
                  <div className="course ">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="fw-bold">
                        <img
                          src={PhonePe}
                          className="pic box-4"
                          width={30}
                          height={20}
                          style={{width:"20px"}}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </label>
              <span> </span>
              <label htmlFor="three" className="box py-2 third">
                <div className="col-4">
                  <span className="circle" />
                  <div className="course">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="fw-bold">
                        <img src={paytym} className="pic box-4" width={30} style={{width:"30px"}} />
                      </span>
                    </div>
                  </div>
                </div>
              </label>
            </div>

            {/* radio button end */}

            <div
              className="my-3 cardname"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div>
                <p className="dis fw-bold mb-2"> UPI ID </p>
                <input className="form-control" type="text" />
              </div>
              <div>
                <p className="dis fw-bold mb-2">@</p>
                <input className="form-control" type="text" />
              </div>
            </div>
            <div>
              <div className="address">
                <div className="d-flex flex-column dis">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p>Subtotal</p>
                    <p>
                      <span className="fas fa-dollar-sign" />
                      33.00
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p>
                      GST<span>(18%)</span>
                    </p>
                    <p>
                      <span className="fas fa-dollar-sign" />
                      2.80
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="fw-bold">Total</p>
                    <p className="fw-bold">
                      <span className="fas fa-dollar-sign" />
                      35.80
                    </p>
                  </div>
                  <div className="btn btn-primary mt-2" onClick={successRedirect}>
                    Pay
                    <span className="fas fa-dollar-sign px-1" />
                    35.80
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upi;
