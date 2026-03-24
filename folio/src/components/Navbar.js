import logo from '../media/Website_logo.png'
import about from '../media/website_about.png'
import work from '../media/website_work.png'
import process from '../media/website_process.png'
import contact from '../media/website_contact.png'
import exhibitions from '../media/website_exhibitions.png';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import logo_image from '../media/website_offcanvas_logo3.jpg';
import { Link } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger);



const Navbar= ()=>{


    return(

<>


  <nav className=" navbar fixed-top " id="nav">
    
     
          < Link className="" to="/">
            <img src={logo} className=" " id="logo" alt="main_logo.svg"/>
          </Link>
           
  
      <div className="d-none d-lg-flex d-md-block me-md-2 pb-md-4  gap-5 me-lg-5" id="fullscreen-nav">
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" to="/about" >About</Link>
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" to="/work"> Work </Link>
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" to="/process"> My process </Link>
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" to="/exhibitions">Exhibitions </Link>          
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" to="/contact">Contact </Link>
      </div>
      <div className="d-lg-none d-md-none">
        <button className="navbar-toggler  border-0 mb-3 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

    {/*off canvas navigation items*/}
      <div className="offcanvas w-75 offcanvas-end rounded-0 border-0 " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header px-5">
          <div className="offcanvas-title" id="offcanvasNavbarLabel">
            <Link to="/">
              <img src={logo_image} id="offcanvas-logo" alt="logo.svg"></img>
            </Link>
          </div>
        </div >
          <hr/>
         <Link className="link-underline link-underline-opacity-0 mx-auto " to="/about" >
          <img id="offset-about" src={about} alt="about.svg"/>
         </Link><hr />
          <Link className="link-underline p-md-5 link-underline-opacity-0 mx-auto" to="/work" >
            <img id="offset-work"  src={work} alt="work.svg"/>
          </Link><hr/>
          <Link className="link-underline link-underline-opacity-0 mx-auto " to="/process" >
            <img id="offset-process" src={process} alt=" process.svg"/>
          </Link><hr/>
           <Link className="link-underline link-underline-opacity-0 mx-auto " to="/exhibitions" >
            <img id="offset-exhibitions" src={exhibitions} alt="exhibitions.svg"/>
          </Link><hr/>
          <Link className="link-underline link-underline-opacity-0 mx-auto" to="/contact" >
            <img id="offset-contact" src={contact} alt="contact.svg"/>
          </Link>
      
      </div>
  </nav>
 
</>
    );
};

export default Navbar;