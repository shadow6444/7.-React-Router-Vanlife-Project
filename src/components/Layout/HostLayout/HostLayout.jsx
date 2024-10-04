import { Outlet } from "react-router-dom";
import "./HostLayout.css";

const HostLayout = () => {
  return (
    <>
      <h1>Host Layout goes here!</h1>
      <Outlet/>
    </>
  );
};

export default HostLayout;
