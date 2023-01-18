import React, { useState } from "react";
import cab1 from "../assets/driver1.png";
import cab2 from "../assets/driver2.png";
import cab3 from "../assets/driver3.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  const [isopen, setIsopen] = useState(false);
  const toggle = () => setIsopen(!isopen);

  const handleSubmit = () => {
    nav("/DriverHomePage");
  };

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cab2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Happy Customer</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cab1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cab3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <motion.div
        animate={{ width: isopen ? "1000px" : "250px" }}
        className="sidebarr mx-3 p-3"
      >
        <div className="bars d-flex p-2">
          <i class="bi bi-option" onClick={toggle}>
            {" "}
          </i>
          <h5 className="text mx-3"> Your Dashboard</h5>

          {isopen && (
            <div
              className="conatiner d-flex icon-cont mx-5"
              onClick={handleSubmit}
            >
              <i class="bi bi-table"></i>
              <h5 className="mx-4">Request Dashboard</h5>
            </div>
          )}

          {isopen && (
            <div className="conatiner d-flex icon-cont2 mx-4">
              <i class="bi bi-credit-card"></i>
              <h5 className="mx-4">Payment History</h5>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Home;
