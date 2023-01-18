import React, { useEffect, useState } from 'react'

const CompletedRides = () => {
 
    const [data, setData] = useState([]);
    //const [ride, setRide] = useState([]);
    
  //Get All Rides Request
  const fetchRides = async () => {
    const data = await fetch("   http://localhost:5000/CompletedRides");
    const parsedData = await data.json();
    setData(parsedData);
    
  };

  useEffect(() => {
    fetchRides();
  }, []);

  
  return (
    <div>
        <div className="conatiner history-cont">
        <h4>History</h4>

        <div class="container my-3 total-grid">
          <div class="row">
            <div class="col">Total Rides Completed :3</div>
            <div class="col">Total Rides Rejected :4</div>
            <div class="col">Total Amount : 1500</div>
          </div>
        </div>

        <input
          type="text"
          className="form-control input-field border-0 my-4"
          id="formGroupExampleInput"
          placeholder="Search"
        />
        <table className="table history-table ">
          <thead>
            <tr>
              <th scope="col">Booking Id</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Booking Date</th>
              <th scope="col">Ride Date</th>
              <th scope="col">Ride Time</th>
              <th scope="col">Ride Charge</th>
              <th scope="col">Status</th>
              
            </tr>
          </thead>

          <tbody>
            {data.map((post) => (
               
              <tr>
                <th scope="row">{post.bookingid}</th>
                <td>{post.from}</td>
                <td>{post.to}</td>
                <td>{post.date_time}</td>
                <td> {post.ridedate}</td>
                <td> {post.ridetime}</td>
                <td> {post.ride_charge}</td>
                <td className='status-col'> {post.status}</td>
               
                
              </tr>
              ))}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default CompletedRides
