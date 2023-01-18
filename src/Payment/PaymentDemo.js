import React from 'react'
import './Demopay.css'
import styles from "./PaymentsPage.module.css";
import Rupay from "../assets/Rupay.png";
import MasterVisa from "../assets/MasterVisa.png";
import { useNavigate } from "react-router-dom";
const PaymentDemo = () => {
  const navigate = useNavigate();
  const successRedirect=()=>{ // card redire
    navigate("/Success");
   }
  return (
   
    <div className="container1 d-lg-flex">
  <div className="box-11 bg-light user">
    <div className="d-flex align-items-center mb-3">
      <img
       src={MasterVisa}
        className="pic1 rounded-circle1" 
        alt=""
      />
      <p className="ps-2 name1"></p>
    </div>
    <div className="d-flex align-items-center mb-3">
      <img
       src={Rupay}
        className="pic1 rounded-circle1" 
        alt=""
      />
      <p className="ps-2 name1"></p>
    </div>
   
  </div>
  <div className="box-22">
    <div className="box-inner-22">
      <div>
        <p className="fw-bold">Payment Details</p>
        <p className="dis mb-3">
          Complete your Booking by providing your payment details
        </p>
      </div>
      <form action="">
        
        <div className="my-3 cardname1">
            <p className="dis fw-bold mb-2">Cardholder name</p>
            <input className="form-control" type="text"/>
          </div>
        <div style={{width:"350px"}}>
          <p className="dis fw-bold mb-2">Card details</p>
          <div className="d-flex align-items-center justify-content-between card-atm border rounded">
            <div className="fab fa-cc-visa ps-3" />
            <input
              type="text"
              maxLength="16"
              className="form-control"
              placeholder="Card Details"
            />
          </div>
          <div className={styles.otherDetails}>
                            <div>
                                <div style={{fontSize:'13px', color:'gray'}}>Expiry</div>
                                <div style={{display:'flex'}}>
                                    <input type="text" placeholder="MM" maxLength={2} />
                                    <input type="text" placeholder="YY" maxLength={2}/>
                                </div>
                            </div>

                            <div>
                                <div style={{fontSize:'13px', color:'gray'}}>CVV</div>
                                <div>
                                    < input style={{width:"50px"}} type="password" maxLength={3} placeholder="CVV" />
                                </div>
                            </div>
                        </div>
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

  )
}

export default PaymentDemo