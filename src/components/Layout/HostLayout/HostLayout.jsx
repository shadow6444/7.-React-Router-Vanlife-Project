import "./HostLayout.css";
import { Link, NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const isActiveStyles = {
    fontWeight: "700",
    color: "#161616",
    textDecoration: "underline",
  };

  return (
    <>
      <div className="host-layout">
        <NavLink
          style={({ isActive }) => (isActive ? isActiveStyles : null)}
          end
          to="."
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? isActiveStyles : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? isActiveStyles : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? isActiveStyles : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
