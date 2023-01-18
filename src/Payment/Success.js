import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserHome from '../components/UserHome';
import './FinalSuccess.css';

export default function Success() {
  const navigate = useNavigate();
  const userRedirect=()=>{ // card redire
    navigate("/");
  }
  return (
    <div className="container1">
  <div className="row mt-10 mb-10">
    <div className="col-md-6 mx-auto mt-5">
      <div className="payment1">
        <div className="payment1_header">
          <div className="check">
            <i className="fa fa-check" aria-hidden="true" />
          </div>
        </div>
        <div className="content" >
          <h1>Payment Success !</h1>
          <p  style={{padding:20}}>
            Yay! Your ride is confirmed!
          </p>
          <a className="btn btn-primaryyy"  onClick={userRedirect}>Go to Home</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
