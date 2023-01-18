import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./UserPayment.css";
import download from "../assets/download.jpg"
import { useNavigate } from "react-router-dom";
import Upi from "../Payment/Upi";
import PaymentDemo from "../Payment/PaymentDemo";

const UserPayment = () => {
  const navigate = useNavigate();
  const [dataaa, setData] = useState([]);
  const data = useSelector((state) => state.rootReducer.userReducer.ride_req);

  const driverById = async (id) => {
    const dataa = await fetch(`http://localhost:5000/Drivers/${id}`);
    const response = await dataa.json();
    setData(response).catch((err) => console.log("Error", err));
  };
  driverById(2);
  const cardRedirect=()=>{ // card redire
    navigate("/PaymentDemo");
   }
   const upiRedirect=()=>{
     navigate("/Upi");
   }
  return (
    <>


<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    <div className="container success">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                    alt="image car"/>
                     <div class="modal-footer">
    <p>Successfully Booked Your Ride....!</p>
      </div>
                </div>
    </div>
    
   
  </div>
</div>


      <div className="container main-div-u my-5">
        <div className="container main_ucont">
          <div className="row m-0">
            <div className="col-lg-7 pb-5 pe-lg-5">
              <div className="row">
                <div className="col-12 p-5">
                  <img
                    src={download}
                    alt=""/>
                </div>
                


                <div className="row m-0 bg-light card-details">
                  <div className="col-md-4 col-6 ps-30 pe-0 my-4">
                    <p className="text-muted">From Location</p>
                    <p className="h5">
                      <span className="ps-1">{data.from}</span>
                    </p>
                  </div>
                  <div className="col-md-4 col-6  ps-30 my-4">
                    <p className="text-muted">To Location</p>
                    <p className="h5 m-0">{data.to}</p>
                  </div>
                  <div className="col-md-4 col-6 ps-30 my-4">
                    <p className="text-muted">Booking Id</p>
                    <p className="h5 m-0">
                      <strong>{data.bookingid}</strong>
                    </p>
                  </div>
                  <div className="col-md-4 col-6 ps-30 my-4">
                    <p className="text-muted">Ride Type</p>
                    <p className="h5 m-0">{data.ride}</p>
                  </div>
                  <div className="col-md-4 col-6 ps-30 my-4">
                    <p className="text-muted">Ride Booking Date</p>
                    <p className="h5 m-0">{data.ridedate}</p>
                  </div>
                  <div className="col-md-4 col-6 ps-30 my-4">
                    <p className="text-muted">Ride Booking Time</p>
                    <p className="h5 m-0">{data.ridetime}</p>
                  </div>
                  <div className="col-md-4 col-6 ps-30 my-4">
                    <p className="text-muted">Car Number</p>
                    <p className="h5 m-0">MP 09 4073</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 p-0 ps-lg-4 my-5">
              <div className="row m-0 my-5">
                <div className="col-12 px-4">
                  <div className="d-flex justify-content-between mb-2">
                    <p className="textmuted">Person</p>
                    <p className="textmuted fs-13 fw-bold">1</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="textmuted">Subtotal</p>
                    <p className=" textmuted fs-14 fw-bold">
                      <span className="fas fa-dollar-sign pe-1"></span>0.00
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="textmuted">Booking Charges</p>
                    <p className=" textmuted fs-14 fw-bold">Free</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="textmuted">Promo code</p>
                    <p className=" textmuted fs-14 fw-bold">
                      -<span className="fas fa-dollar-sign px-1"></span>0.00
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <p className="textmuted fw-bold">Total Ride Charges</p>
                    <div className="d-flex align-text-top ">
                      <span className="fas fa-dollar-sign mt-1 pe-1 fs-14 "></span>
                      <span className="h4 textmuted">{data.ride_charge}</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="row bg-light m-0 card-details">
                    <div className="col-12 px-4 my-4">
                      <p className="fw-bold">Driver Details</p>
                    </div>
                    <div className="col-12 px-4">
                      <div className="d-flex  mb-4">
                        <span className="">
                          <h1 className="text-muted">Driver Name </h1>
                          <h3> {dataaa.userName}</h3>
                        </span>
                        <div className=" w-100 d-flex flex-column align-items-end">
                          <h3 className="text-muted"> Driver Contact</h3>
                          <h5> {dataaa.mobile}</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row m-0 my-3">
                    <div className="col-12  mb-4 p-0">
                      <div
                        className="btn btn-primaryy"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={cardRedirect}
                      >
                        Card Pay
                        <span className="fas fa-arrow-right ps-2"></span>
                      </div>
                    </div>
                    <div className="col-12  mb-4 p-0 my-2">
                      <div className="btn btn-primaryyy" onClick={upiRedirect}>
                        UPI PAY
                        <span className="bi bi-credit-card ps-2"></span>
                      </div>
                    </div>
                    <div className="col-12  mb-4 p-0 my-2">
                      <div className="btn btn-prime" data-bs-toggle="modal" data-bs-target="#exampleModall">
                        Cash
                        <span className="bi bi-cash ps-2"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPayment;
