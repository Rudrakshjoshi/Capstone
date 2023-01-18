import { userConstant } from "../Constants/UserConst";
import { cr_ride_ReqCons } from "../Constants/UserConst";
import { driverConstant } from "../Constants/UserConst";

const initialState = {
  user: "",
  ride_req: "",
  get_all_rides: "",
  driver: "",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstant.REGISTER_USER:
      return { ...initialState, user: action.payload };
      break;
    case driverConstant.REGISTER_DRIVER:
      return { ...initialState, driver: action.payload };
      break;
    case cr_ride_ReqCons.CREATE_RIDE_REQ:
      return { ...initialState, ride_req: action.payload };
      break;

    default:
      return initialState;
      break;
  }
};
