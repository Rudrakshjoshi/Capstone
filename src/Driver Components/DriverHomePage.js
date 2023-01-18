import React, { useState } from "react";
import { motion } from "framer-motion";
import RideRequest from "./RideRequest";
import CompletedRides from "./CompletedRides";

const DriverHomePage = () => {
 // const [isopen, setIsopen] = useState(true);
  const [userOn, setUserOn] = useState(false);
  const [driverOn, setDriverOn] = useState(false);


  const userSwitch = () => setUserOn(!userOn);
  const driverSwitch = () => setDriverOn(!driverOn);

  return (
    <>
      <motion.div className="main_Container">
        <div class="container">
          <div class="row">
            <div class="col ">
              <div className="dash-button" onClick={userSwitch}>
                <i class="bi bi-car-front p-3"></i> Ride Request
              </div>
            </div>
            <div class="col ">
              <div className="dash-button" onClick={driverSwitch}>
                <i class="bi bi-check p-3"></i> Completed Rides
              </div>
            </div>
            <div class="col ">
              <div className="dash-button">
                <i class="bi bi-car-front p-3"></i> Driver Dashboard
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div class="container-xl table-cont">
        {userOn && <RideRequest />}
        {driverOn && <CompletedRides />}
      </div>
    </>
  );
};

export default DriverHomePage;
