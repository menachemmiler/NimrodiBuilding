import React from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useBuildingData from "../../utils/BuildingDataProvider";
import "./Layout.css";
import Reception from "../../pages/Reception/Reception";
import Floor from "../../pages/Floor/Floor";
import Forbidden from "../../pages/Forbidden/Forbidden";
import PrivateRoute from "../../utils/PrivateRoute";

const Layout: React.FC = () => {
  const floorAccess = useSelector(
    (state: {
      floorAccess: {
        floorAccess: [boolean, boolean, boolean, boolean, boolean];
      };
    }) => state.floorAccess.floorAccess
  );
  const { getFloorByIndex } = useBuildingData();

  return (
    <div className="layout-page">
      <nav className="navbar">
        <h1>מגדל נמרודי</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          {floorAccess.map((floor: boolean, index: number) => (
            <Link key={index} to={`/floor/${index}`}>
              {getFloorByIndex(index)?.purpose || `Floor ${index + 1}`}
            </Link>
          ))}
        </div>
      </nav>

      <Routes>
        <Route path="/forbidden" element={<Forbidden />} />
        <Route index element={<Reception />} />
        <Route
          path="/floor/:index"
          element={
            <PrivateRoute>
              <Floor/>
            </PrivateRoute>
          }
        />
      </Routes>

      <footer className="layout-footer">
        <h2>About מגדל נמרודי</h2>
        <p>
          Nimrodi Tower is a prominent skyscraper in the BBC complex of Bnei
          Brak, comprising 55 floors reaching a height of 211 meters. It
          includes commercial and office spaces with a unique architectural
          style. The project, part of a larger construction initiative,
          positions the Nimrodi Tower as a key architectural landmark in the
          cityscape.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
