

function Navbar() {
  return (
    <nav className="d-flex justify-content-between text-white " >
      <div>
        <h3>Company</h3>
      </div>

      <ul className="d-flex row" style={{gap:"56px"}} >

        <li className="col" >
          <a href="" className="nav-color">Home</a>
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
