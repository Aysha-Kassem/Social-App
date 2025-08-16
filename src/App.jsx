// React router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import LayoutApp from "./Layout/LayoutApp/LayoutApp";

// Pages
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "",
      element: <LayoutApp />,
      children: [{ index: true, element: <Home /> }],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <div className="bg-white dark:bg-black ">
      {/* Router */}
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
