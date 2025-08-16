import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const LayoutApp = () => {
  return (
    <main className=" min-h-screen">
      {/* The Toaster component is used to display notifications */}
      <Toaster position="top-center" reverseOrder={false} />;
      <Navbar />
      {/* Render child routes */}
      <Outlet />
    </main>
  );
};

export default LayoutApp;
