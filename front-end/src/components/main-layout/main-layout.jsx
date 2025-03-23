import { Outlet, ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ScrollRestoration />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
