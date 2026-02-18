const Navbar= ()=>{

    return(

       


<>

<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" id="Navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">STUDIONTI</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <div>
        
      </div>
        <ul className="navbar-nav  ">
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My process</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        
        </ul>
      
    </div>
  </div>
</nav>
</>
    );
};

export default Navbar;