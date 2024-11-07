import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route index element={<Reception />} />
        <Route
          path="/floor/:index"
          element={<PrivateRoute component={<Floor />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
