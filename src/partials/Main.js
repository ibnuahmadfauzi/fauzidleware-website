import { Outlet } from "react-router-dom";
import Aside from "./Aside";

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <Outlet />
        </div>
        <div className="col-lg-4">
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Main;
