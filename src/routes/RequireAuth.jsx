import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthentication from "../customHooks/useAuthentication";

function CheckAuthLogin() {
  const  { isAuthenticated } = useAuthentication();
  // const location = useLocation();
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"}/>
}

export default CheckAuthLogin;