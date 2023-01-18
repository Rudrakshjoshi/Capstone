import axios from "axios";
import { userConstant } from "../Constants/UserConst";
import { driverConstant } from "../Constants/UserConst";
import { store } from "../Store";
import { cr_ride_ReqCons } from "../Constants/UserConst";
import { driverConst } from "../Constants/UserConst";



export const registerUser = async(payload) => {
    const register = await axios.post('http://localhost:5000/Users',payload)
    store.dispatch({type:userConstant.REGISTER_USER,payload:register.data})
    //  REGISTER USER
}
export const registerDriver = async(payload) => {
    const register = await axios.post(' http://localhost:5000/Drivers',payload)
    store.dispatch({type:driverConstant.REGISTER_DRIVER,payload:register.data})
    //  REGISTER USER
}

export const loginUser = (payload) => {
    store.dispatch({type:userConstant.LOGIN_USER,payload})
}


export const rideRequest = async(payload) => {
    const add_ride_req = await axios.post('http://localhost:5000/RideRequest',payload)
    store.dispatch({type:cr_ride_ReqCons.CREATE_RIDE_REQ,payload:add_ride_req.data})
    //  CREATE RIDE REQUEST // user
}

export const getrideRequests = async(payload) => {
    
    const get_rides =  axios.get('http://localhost:5000/RideRequest',payload)
    store.dispatch({type:driverConst.GET_ALL_RIDES_REQ,payload:get_rides.data})
    console.log(get_rides)
    //  GET ALL RIDE REQUEST //driver

}


