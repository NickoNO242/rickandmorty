const Navbar = ({ brand }) => {
  const style = {
    position: "static",
  };
  return (
    <nav className="navbar  navbar-dark  fixed-top">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          {brand}
        </a>
        <button className="btn btn-lg bg-dark rounded-circle">
          <i className="bi bi-person-circle text-primary w-auto fs-2"></i>
        </button>
      </div>
    </nav>
    //     <nav className="navbar fixed-top navbar-light bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">Fixed top</a>
    //   </div>
    // </nav>
  );
};
export default Navbar;
