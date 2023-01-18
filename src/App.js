import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import AdminHome from "./Admin Components/AdminHome";
import LogIn from "./components/LogIn Comp/LogIn";
import Register from "./components/Reg Comp/Register";
import UserHome from "./components/UserHome";
import DriverHomePage from "./Driver Components/DriverHomePage";
import DriverRegister from "./Driver Components/DriverRegister";
import Home from "./Driver Components/Home";
import UserPayment from "./components/UserPayment";
import CompletedRides from "./Driver Components/CompletedRides";
import Upi from "./Payment/Upi"
import PaymentDemo from "./Payment/PaymentDemo"
import Success from "./Payment/Success"


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/LogIn" element={<LogIn />}></Route>
        <Route exact path="/Register" element={<Register />}></Route>
        <Route exact path="/AdminHome" element={<AdminHome />}></Route>
        <Route exact path="/" element={<UserHome />}></Route>
        <Route
          exact
          path="/DriverRegister"
          element={<DriverRegister />}
        ></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route
          exact
          path="/DriverHomePage"
          element={<DriverHomePage />}
        ></Route>
        <Route exact path="/UserPayment" element={<UserPayment />}></Route>
        <Route exact path="/CompletedRide" element={<CompletedRides />}></Route>
        <Route exact path="/PaymentDemo" element={<PaymentDemo />}></Route>
        <Route exact path="/Upi" element={<Upi />}></Route>
        <Route exact path="/Success" element={<Success />}></Route>
      </Routes>
    </>
  );
}

export default App;
