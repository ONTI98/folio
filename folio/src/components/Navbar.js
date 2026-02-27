import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar= ()=>{

    return(

<>


  <nav class="navbar fixed-top ">
    
      <div className="d-flex">
        <span>
          <Link className="link-underline link-underline-opacity-0" to="/">STUDIO ONTI</Link>
        </span>
      </div>          
  
      <div className="d-none d-lg-flex gap-5  me-2 ">
          <Link className="link-underline link-underline-opacity-0" to="/about" >Abou</Link>
          <Link className="link-underline link-underline-opacity-0" to="/work">Work </Link>
          <Link className="link-underline link-underline-opacity-0" to="/process">My process </Link>
          <Link className="link-underline link-underline-opacity-0" to="/contact">Contact </Link>
      </div>
      <div className="d-lg-none">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="offcanvas w-75  offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <Link to="/">
              STUDIO ONTI
            </Link>
          </h5>
        </div>
          <hr/>
          <Link className="link-underline link-underline-opacity-0 mx-auto" to="/about"  >About</Link><hr />
          <Link className="link-underline link-underline-opacity-0 mx-auto" to="/work">Work</Link><hr/>
          <Link className="link-underline link-underline-opacity-0 mx-auto" to="/process">My process</Link><hr/>
          <Link className="link-underline link-underline-opacity-0 mx-auto" to="/contact">Contact</Link>
      </div>
  </nav>
 
</>
    );
};

export default Navbar;