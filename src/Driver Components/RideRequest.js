import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DriverHome.css";

const RideRequest = () => {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);

  //GET ALL
  const fetchRides = async () => {
    const data = await fetch(" http://localhost:5000/RideRequest");
    const parsedData = await data.json();
    setData(parsedData);
  };

  const rideById = async (id) => {
    const dataa = await fetch(`http://localhost:5000/RideRequest/${id}`);
    const response = await dataa.json();
    setDetails(response);
    //console.log(response);
    const ridedata = {
      from: response.from,
      to: response.to,
      ride: response.ride,
      date_time: response.date_time,
      status: "Completed",
      bookingid: response.bookingid,
      ride_charge: response.ride_charge,
      ridedate: response.ridedate,
      ridetime: response.ridetime,
    };
    // console.log({ridedata})

    axios.post("http://localhost:5000/CompletedRides", {
      // Enter your IP address here
      ...ridedata, // body data type must match "Content-Type" header
    });
  };

  useEffect(() => {
    fetchRides();
  }, []);

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Ride Confirmation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col">From :<strong>{details.from}</strong> </div>
                  <div class="col">To : <strong>{details.to}</strong></div>
                </div>
                <div class="row">
                  <div class="col">Booking Id : <strong>{details.bookingid}</strong></div>
                  <div class="col">Booking Date : {details.date_time}</div>
                </div>
                <div class="row">
                  <div class="col">Ride Date : {details.ridedate}</div>
                  <div class="col">Ride Time: {details.ridetime}</div>
                </div>
                <div class="row">
                  <div class="col">Ride Status : {details.status}</div>
                  <div class="col">Ride Charges: <strong>{details.ride_charge}</strong></div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-success"
              >
                Mark Ride Complete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner main-conatiner ">
        <div className="card req-card">
          <table className="table">
            <thead className="driver-table-thread">
              <tr>
                <th scope="col">Booking Id</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Ride Date</th>
                <th scope="col">Ride Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody className="driver-table-thread">
              {data.map((post) => (
                <tr>
                  <th scope="row">{post.bookingid}</th>
                  <td>{post.from}</td>
                  <td>{post.to}</td>
                  <td>{post.date_time}</td>
                  <td>{post.ridedate}</td>
                  <td>{post.ridetime}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => rideById(post.id)}
                    >
                      Pick Ride
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RideRequest;
