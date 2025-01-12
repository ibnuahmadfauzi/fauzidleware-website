import { Outlet } from "react-router-dom";
import Aside from "./Aside";

const Main = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default Main;
