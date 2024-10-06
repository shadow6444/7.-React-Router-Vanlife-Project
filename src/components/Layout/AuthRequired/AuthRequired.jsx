import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRequired = () => {
  const isLoggedIn = localStorage.getItem("loggedin");
  const { pathname } = useLocation();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ message: "You must log in first", from: pathname }}
      replace
    />
  );
};
export default AuthRequired;
