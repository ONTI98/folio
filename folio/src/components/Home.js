import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import homepage_clip from '../media/homepage_clip1.mp4';
import selfie from '../media/selfie 11-4-2-2-2.jpg';
import about_me_image from '../media/about_me2.jpg';
import process_video from '../media/website_clip.mp4';
import FooterImage  from './Footer_image';
import elephant from '../media/website_footer.png';
import cow1 from '../media/website_footer1.png';
import family from '../media/website_footer2.png';
import giraffe from '../media/website_footer3.png';
import cow from '../media/website_footer4.png';
import person from '../media/website_footer5.png';
import sun from '../media/website_footer6.png';
import Navbar from './Navbar.js';
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);




const Home=()=>{
  


  useGSAP(()=>{

  ScrollSmoother.create(
          {
            smooth:1,
          });
    
   //animation context       
   const ctx=gsap.context(()=>{
      
      gsap.fromTo("#my-palette",{x:0},
         {xPercent:140,
          scrollTrigger:{
            trigger:"#my-palette",
            start:"5% top",
            end:"bottom top",
            scrub:1,}})
        
        gsap.fromTo("#about-me",{x:0},
        {xPercent:-100,
            scrollTrigger:{
            trigger:"#about-me",
            start:"5% top",
            end:"bottom top",
            scrub:1,}})
        
        gsap.fromTo("#work",{x:0},
           {xPercent:110,
            scrollTrigger:{
            trigger:"#work",
            start:"5% top",
            end:"bottom top",
            scrub:1,}}
        )
        

        gsap.fromTo("#process",{x:0},
            {xPercent:-120,
            scrollTrigger:{
            trigger:"#process",
            start:"5% top",
            end:"bottom top",
            scrub:1,
            
          }}
        )
        ScrollTrigger.refresh();

        ScrollTrigger.create(
          {
            trigger:"#home-container",
            start:"top top",
            toggleClass:{
              targets:"#nav",
              className:"nav-hidden"
            }
            
          }
        )
        ScrollTrigger.refresh();

        
        gsap.set(
        ["#my-palette","#about-me","#work","#process"],
        { willChange: "transform" }
    );
    
  });
  //const tl=gsap.timeline()
  return ()=>{
    ctx.revert();
  };
},[]);

      return(
        
        <>
  
        <Navbar/>
        <div id="smooth-wrapper" >
          <div id="smooth-content">
          <div className="container-fluid overflow-hidden position-relative" id="home-container">
            <div className="row row-cols-1" id="row" >
            {/*Introduction section*/}
              <div className="min-vh-100  col position-relative" id="palette-1" >
                <h6 className="position-absolute bottom-0 start-0 pad-palette rotate" id="palette-1-heading" >Lemon yellow</h6>
                <div className="min-vh-100 position-absolute top-0 start-0 end-0 bottom-0"id="my-palette">
                  
                    <div className="homepage-video-container d-flex justify-content-center ">
                     
                         <img src={selfie} className="d-lg-none rounded" alt="home_image" id="home-image"/>
                     
                       <video  id="homepage-clip" className="d-none d-lg-flex" src={homepage_clip} type="video/mp4"  loop muted preload="none"></video> 
                                                                
                    </div>
                </div>
              </div>
                
              {/*About me section*/}
              <div className=" min-vh-100 col position-relative" id="palette-2" >
                <h6 className="position-absolute bottom-0 end-0 pad-palette rotate">Lamp black</h6>
                <div className="min-vh-100 position-absolute top-0 start-0 end-0 bottom-0 "id="about-me">
                  
                  <h3 className="tomorrow-thin p-5" >About</h3>
                    <img src={about_me_image} className="d-flex rounded" id="about-me-image"alt="about self portrait"/>
                    <p className="tomorrow-thin p-5 d-none d-lg-flex d-sm-none ">Ontisitse Manyeneng, born in 1998, is a South African visual artist and oil painter.
                      His works explore the human psyche and how perceptions are shaped as a results of it. At the core of his practice, he finds inspiration from 
                      the concept of the family unit, its make-up ,origins and the role is plays in the greater society. His practice is heavily inluenced by classical realism,
                      impressionism,Neo-classicism and modern-day  minimalism, where he fuses both convetional and uncoventional theory to portray fundamental human commonalities.
                       </p>
                       <a className="link-underline link-underline-opacity-0 tomorrow-thinner text-primary d-none d-lg-flex justify-content-center" href="/about" >Read more</a>
                      <p className="tomorrow-thin  py-5 px-3 d-sm-flex d-lg-none">Ontisitse Manyeneng, born in 1998, is a South African visual artist and oil painter.
                      His work explores the human psyche and how perceptions are shaped as a results of it. At the core of his practice, he finds inspiration from 
                      the concept of the family unit, its make-up ,origins and the role is plays in the greater society...<br/>
                      <a className="link-underline link-underline-opacity-0 tomorrow-thinner text-primary d-lg-none d-flex d-md-none justify-content-end" href="/about" >Read more</a>
                      </p>
                      <a className="link-underline link-underline-opacity-0 tomorrow-thinner text-primary d-none d-lg-none d-flex d-md-flex justify-content-center" href="/about" >Read more</a>

                      
                      
                </div>
                
              </div>
              
              {/*Works section*/}
                 <div className=" min-vh-100 col position-relative " id="palette-3" >
                <h6 className="position-absolute bottom-0 start-0 rotate pad-palette text-white">Cadnium red light</h6>
                <div className="border-0 position-absolute top-0 start-0 end-0 bottom-0"id="work">
                  <h3 className="tomorrow-thin p-5 text-white">Work</h3>
                  <div className=" min-vh-100 d-flex justify-content-center position-absolute top-0 bottom-0 end-0 start-0"  id="see-more-container" >
                    <a href="/work" className="text-white link-underline link-underline-opacity-0 " id="see-more-container-link">
                      <i className=" bx bx-arrow-to-right bx-lg d-flex justify-content-center rounded bx-flashing" id="see-more-icon"></i> 
                      <div className="tomorrow-thin text-white">See more</div> 
                    </a> 
                  </div>
                </div>
              </div>

              {/*My process section*/}
                 <div className=" min-vh-100 col position-relative" id="palette-4"  >
                <h6 className="position-absolute bottom-0 end-0 rotate pad-palette">Prussian blue</h6>
                <div className="min-vh-100 position-absolute top-0 start-0 end-0 bottom-0 overflow-hidden"id="process">
                  <h3 className="tomorrow-thin p-5 ">My process</h3>
                  <video className="p-md-5 rounded "src={process_video} type="video/mp4" autoPlay muted loop preload="metadata" id="process-video"></video>
                  <a className="link-underline link-underline-opacity-0 tomorrow-thin text-white d-flex justify-content-center " href="/process" >
                      Read about my process</a> 
                </div>
              </div>

               {/*Footer section*/}
              <div className="col  d-lg-flex d-sm-block d-md-block p-5  position-relative" id="footer">
                <div className="position-absolute top-0 start-0 opacity-75" id="elephant">
                   <FooterImage source={elephant} />
                </div>
                <div className="position-absolute top-0 start-50  opacity-50" id="cow1">
                   <FooterImage source={cow1} />
                </div>
                <div className="position-absolute top-0 end-0  opacity-100" id="family">
                   <FooterImage source={family} />
                </div>
                <div className="position-absolute top-50 start-0  opacity-100" id="giraffe">
                   <FooterImage source={giraffe} />
                </div>
                <div className="position-absolute bottom-0 start-0  opacity-100"   id="cow">
                   <FooterImage source={cow} />
                </div>
                <div className="position-absolute bottom-0 start-50  opacity-100 "  id="person">
                   <FooterImage source={person} />
                </div>
                 <div className="position-absolute bottom-0 end-0 opacity-100" id="sun">
                   <FooterImage source={sun} />
                </div>
                     <div className="position-absolute bottom-0 top-50 end-0 opacity-100" id="elephant1">
                   <FooterImage source={sun} />
                </div>

                {/*Footer icon and heading*/}

                {/*instagram link*/}
                
              
               <div className="col rounded d-block d-lg-block d-md-block  p-4">
                <h5 className="tomorrow-thinner">Contact Ontisitse Manyeneng</h5>
                <div className="col d-md-block d-sm-flex d-lg-block justify-content-center py-4 " id="instagram-link">
                    <a className="link-underline link-underline-opacity-0" href="https://instagram.com/ontisitsemanyeneng">
                  <i className="fa-brands fa-xl fa-instagram "><span className="tomorrow-thin ps-1">ontisitsemanyeneng</span></i>
                  </a>
                </div>
               </div>

              {/*Github link*/}
              
                 <div className="col rounded d-block d-lg-block d-md-block   p-4 ">
                <h5 className="tomorrow-thinner">This website is designed and maintained by</h5>
                <div className="col d-md-block d-lg-block justify-content-center py-4">
                  <a className="link-underline link-underline-opacity-0" href="https://github.com/ONTI98">
                  <i className="fa-brands fa-xl fa-github "><span className="tomorrow-thin ps-1">CODONTI</span></i>
                  </a>
                </div>
               </div>


              </div>
            </div>
          </div>
          </div>
        </div>
    
        </>
    );
  };
  


export default Home;
