import React, { useState } from "react";
import "./AdminHome.css";
import { motion } from "framer-motion";
import UserMng from "./UserMng";
import DriverMng from "./DriverMng";
const AdminHome = () => {
  
  const [isopen , setIsopen]=useState(false);
  const [userOn , setUserOn]=useState(false);
  const [driverOn , setDriverOn]=useState(false);
   
  const toggle =()=> setIsopen(!isopen);
  const userSwitch =()=> setUserOn(!userOn);
  const driverSwitch =()=> setDriverOn(!driverOn);
  return (
    <>
    <div className="main-conatiner">
      <motion.div animate={{ width: isopen ?"200px":"50px" }} className="sidebar">
        <div className="top_section">
          <div className="bars">
            <i class="bi bi-menu-button icon" onClick={toggle }></i>
          </div>
         {isopen&& <p className="logo">Admin Dashboard</p>}
        </div>
        <div className="sec">
          <div className="main-sec">
            <div className="top_section1">
              <div className="bars">
                <i class="bi bi-person"onClick={userSwitch }></i>
              </div>
              {isopen&&<p className="logo"><a onClick={userSwitch }>User Management</a></p>}
            </div>
          </div>
          <div className="main-sec my-3">
            <div className="top_section1">
              <div className="bars">
                <i class="bi bi-car-front" onClick={driverSwitch}></i>
              </div>
              {isopen&&<p className="logo"><a onClick={driverSwitch}>Driver Managemnt </a></p>}
            </div>
          </div>
          <div className="main-sec">
            <div className="top_section1">
              <div className="bars">
                <i class="bi bi-bar-chart"></i>
              </div>
              {isopen&&<p className="logo">Dashboard</p>}
            </div>
          </div>
        </div>      
      </motion.div>
      <motion.div animate={{ width: isopen ?"838px":"1102px"  }} className="container-xxl admin-body">   
      {userOn &&<UserMng/>}
      {driverOn&&<DriverMng/>}       
    </motion.div>   
    </div>   
   </>
  );
};

export default AdminHome;