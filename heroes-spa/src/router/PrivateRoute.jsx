import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  const {pathname, search}= useLocation()

  const lastPath = pathname + search;

  console.log(pathname)


  localStorage.setItem("lastpath", lastPath)



  return logged ? children : <Navigate to="/login" />;
};
