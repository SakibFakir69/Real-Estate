

function Navbar() {
  return (
   <nav className="d-flex justify-content-between p-2 text-white " style={{paddingTop:"30px"}}>


      <div>
        <h3 className="fs-1 fw-bold" >Company</h3>
      </div>

      <ul className="d-md-flex row gap-5 justify-content-center align-items-center d-none "  >

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

      <img className="d-md-none d-block " width="50" height="50" src="https://img.icons8.com/ios-filled/50/menu--v1.png" alt="menu--v1"/>

    </nav>
  );
}

export default Navbar;
