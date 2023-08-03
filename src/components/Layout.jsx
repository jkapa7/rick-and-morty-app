import NavBar from "../components/NavBar";

const Layout = ({ childen }) => {
  return (
    <>
      <NavBar />
      {childen}
    </>
  );
};

export default Layout;
