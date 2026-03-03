import {Link} from 'react-router-dom';
import logo from '../media/Website_logo.png'
import about from '../media/website_about.png'
import work from '../media/website_work.png'
import process from '../media/website_process.png'
import contact from '../media/website_contact.png'
import exhibitions from '../media/website_exhibitions.png'


const Navbar= ()=>{

    return(

<>


  <nav className=" navbar fixed-top ">
    
     
          <Link className="" to="/">
            <img src={logo} className=" " id="logo" alt=""/>
          </Link>
           
  
      <div className="d-none d-lg-flex gap-5 me-lg-5">
          <a className="link-underline link-underline-opacity-0 tomorrow-thin" href="/about" >About</a>
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin" to="/work">Work </Link>
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin" to="/process">Exhibitions </Link>          
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin" to="/process">My process </Link>
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin" to="/contact">Contact </Link>
      </div>
      <div className="d-lg-none">
        <button className="navbar-toggler border-0 mb-3 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon border-0"></span>
        </button>
      </div>

      <div className="offcanvas w-75  offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <div className="offcanvas-title" id="offcanvasNavbarLabel">
            <Link to="/">
              Logo
            </Link>
          </div>
        </div>
          <hr/>
         <a className="link-underline link-underline-opacity-0 mx-auto" href="/about" >
          <img id="offset-about" src={about} alt=""/>
         </a><hr />
          <Link className="link-underline link-underline-opacity-0 mx-auto" to="/work" >
            <img id="offset-work" src={work} alt=""/>
          </Link><hr/>
           <Link className="link-underline link-underline-opacity-0 mx-auto" to="/exhibitions" >
            <img id="offset-exhibitions" src={exhibitions} alt=""/>
          </Link><hr/>
          <Link className="link-underline link-underline-opacity-0 mx-auto" to="/process" >
            <img id="offset-process" src={process} alt=""/>
          </Link><hr/>
          <Link className="link-underline link-underline-opacity-0 mx-auto" to="/contact" >
            <img id="offset-contact" src={contact} alt=""/>
          </Link>
      
      </div>
  </nav>
 
</>
    );
};

export default Navbar;