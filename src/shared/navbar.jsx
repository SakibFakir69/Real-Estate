

function Navbar() {
  return (
    <nav className="d-flex justify-content-between  text-white mt-82" >
      <div>
        <h3 className="fs-1 fw-bold" >Company</h3>
      </div>
      <ul className="d-flex row gap-5 justify-content-center align-items-center  "  >

        <li className="col" >
          <a href="" className="nav-color fw-bold">Home</a>
        </li>

        <li className="col">
          <a href="" className="nav-color">About</a>
        </li>
        <li className="col">
          <a href="" className="nav-color">project</a>
        </li>
        <li className="color-text col nav-color">
          <a href="" className="color-text ">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
