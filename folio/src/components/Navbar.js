import logo from '../media/Website_logo.png'
import about from '../media/website_about.png'
import work from '../media/website_work.png'
import process from '../media/website_process.png'
import contact from '../media/website_contact.png'
import exhibitions from '../media/website_exhibitions.png';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import logo_image from '../media/website_offcanvas_logo3.jpg';
gsap.registerPlugin(ScrollTrigger);



const Navbar= ()=>{


    return(

<>


  <nav className=" navbar fixed-top " id="nav">
    
     
          < a className="" href="/">
            <img src={logo} className=" " id="logo" alt="main_logo.svg"/>
          </a>
           
  
      <div className="d-none d-lg-flex d-md-block me-md-2 pb-md-4  gap-5 me-lg-5" id="fullscreen-nav">
          <a className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" href="/about" >About</a>
          <a className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" href="/work"> Work </a>
          <a className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" href="/process"> My process </a>
          <a className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" href="/exhibitions">Exhibitions </a>          
          <a className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" href="/contact">Contact </a>
      </div>
      <div className="d-lg-none d-md-none">
        <button className="navbar-toggler  border-0 mb-3 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

    {/*off canvas navigation items*/}
      <div className="offcanvas w-75 offcanvas-end rounded-0 border-0 " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header px-5">
          <div className="offcanvas-title" id="offcanvasNavbarLabel">
            <a href="/">
              <img src={logo_image} id="offcanvas-logo" alt="logo.svg"></img>
            </a>
          </div>
        </div >
          <hr/>
         <a className="link-underline link-underline-opacity-0 mx-auto" href="/about" >
          <img id="offset-about" src={about} alt="about.svg"/>
         </a><hr />
          <a className="link-underline p-md-5 link-underline-opacity-0 mx-auto" href="/work" >
            <img id="offset-work"  src={work} alt="work.svg"/>
          </a><hr/>
          <a className="link-underline link-underline-opacity-0 mx-auto" href="/process" >
            <img id="offset-process" src={process} alt=" process.svg"/>
          </a><hr/>
           <a className="link-underline link-underline-opacity-0 mx-auto" href="/exhibitions" >
            <img id="offset-exhibitions" src={exhibitions} alt="exhibitions.svg"/>
          </a><hr/>
          <a className="link-underline link-underline-opacity-0 mx-auto" href="/contact" >
            <img id="offset-contact" src={contact} alt="contact.svg"/>
          </a>
      
      </div>
  </nav>
 
</>
    );
};

export default Navbar;