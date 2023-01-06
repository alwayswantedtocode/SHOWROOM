import { Link, Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const Home = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};
export default Home;
