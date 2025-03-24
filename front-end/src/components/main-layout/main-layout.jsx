import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../navbar/nabvar";
// import Footer from "../footer/footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
