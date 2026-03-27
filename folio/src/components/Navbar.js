import logod from '../media/Website_logod.webp';
import logord from '../media/Website_logord.webp';
import about from '../media/website_about.webp'
import work from '../media/website_work.webp'
import process from '../media/website_process.webp'
import contact from '../media/website_contact.webp'
import exhibitions from '../media/website_exhibitions.webp';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import logo_image from '../media/website_offcanvas_logo3.jpg';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);



const Navbar= ()=>{

//create function that will enable scrolling again
  const enable_scroll=()=>{
    document.body.style.overflow="";
   };


    return(

<>


  <nav className=" navbar fixed-top " id="nav">
    
     
          < Link  onClick={enable_scroll} to="/" >
            <img src={logod}
            srcSet={`${logod} 1x, ${logord} 2x`}
            id="logo" alt="main_logo.svg"/>
          </Link>
           
  
      <div className="d-none d-lg-flex d-md-block me-md-2 pb-md-4  gap-5 me-lg-5" id="fullscreen-nav">
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" onClick={enable_scroll} to="/about" >About</Link>
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" onClick={enable_scroll} to="/work" > Work </Link>
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" onClick={enable_scroll} to="/process"> My process </Link>
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" onClick={enable_scroll} to="/exhibitions">Exhibitions </Link>          
          <Link className="link-underline link-underline-opacity-0 tomorrow-thin me-md-2" onClick={enable_scroll} to="/contact">Contact </Link>
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
            <Link onClick={enable_scroll} to="/" data-bs-dismiss="offcanvas">
              <img src={logo_image} id="offcanvas-logo" alt="logo.svg"></img>
            </Link>
          </div>
        </div >
          <hr/>
         <Link className="link-underline link-underline-opacity-0 mx-auto " onClick={enable_scroll} to="/about" >
          <img id="offset-about" src={about} alt="about.svg"/>
         </Link><hr />
          <Link className="link-underline p-md-5 link-underline-opacity-0 mx-auto"  onClick={enable_scroll} to="/work" >
            <img id="offset-work"  src={work} alt="work.svg"/>
          </Link><hr/>
          <Link className="link-underline link-underline-opacity-0 mx-auto " onClick={enable_scroll} to="/process" >
            <img id="offset-process" src={process} alt=" process.svg"/>
          </Link><hr/>
           <Link className="link-underline link-underline-opacity-0 mx-auto " onClick={enable_scroll} to="/exhibitions" >
            <img id="offset-exhibitions" src={exhibitions} alt="exhibitions.svg"/>
          </Link><hr/>
          <Link className="link-underline link-underline-opacity-0 mx-auto" onClick={enable_scroll} to="/contact" >
            <img id="offset-contact" src={contact} alt="contact.svg"/>
          </Link>
      
      </div>
  </nav>
 
</>
    );
};

export default Navbar;