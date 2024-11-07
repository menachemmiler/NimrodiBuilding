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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        
      ]
    },
    {
      path: "/forbidden",
      element: <Forbidden />,
    },
    // {
    //   path: "/floor/:index",
    //   element: (
    //     <PrivateRoute>
    //       <Floor />
    //     </PrivateRoute>
    //   ),
    // },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
