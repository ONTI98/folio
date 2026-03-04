import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import homepage_clip from '../media/homepage_clip1.mp4';
import selfie from '../media/selfie 11-4-2.jpg'
import about_me_image from '../media/about_me.jpg'
import { Link } from 'react-router-dom';
import process_video from '../media/website_clip.mp4';
import work_poly from '../media/website_work_poly1.jpg'


const Home=()=>{
  
  

   useEffect(()=>{

      gsap.registerPlugin(ScrollTrigger);

      const tl=gsap.timeline();

      tl.fromTo("#my-palette",{x:0},
         {xPercent:100,
          scrollTrigger:{
            trigger:"#my-palette",
            start:"top top",
            end:"bottom top",
            scrub:1.5,}})
        
      .fromTo("#about-me",{x:0},
        {xPercent:-100,
            scrollTrigger:{
            trigger:"#about-me",
            start:"top top",
            end:"bottom top",
            scrub:1.5,}})
        
        .fromTo("#work",{x:0},
           {xPercent:100,
            scrollTrigger:{
            trigger:"#work",
            start:"top top",
            end:"bottom top",
            scrub:1.5,}}
        )

        .fromTo("#process",{x:0},
            {xPercent:-100,
            scrollTrigger:{
            trigger:"#process",
            start:"top top",
            end:"bottom top",
            scrub:1.5,}}
        )

        .fromTo("#footer",{x:0},{xPercent:0})

          ScrollTrigger.create(
        { 
          trigger:"#about-me",
          start:"top 30%",
          end:"400% 200vh ",
          toggleClass:{targets:"#nav,#palette-1-heading", className:"nav-hidden"}
        })

       
       
        
          
      
      },[]);

    return(
        <>
       
        <div >
   
          <div className=" container-fluid overflow-hidden position-relative" id="home-container">
            <div className="row row-cols-1" id="row" >
            {/*Introduction section*/}
              <div className=" min-vh-100 col position-relative" id="palette-1" >
                <h5 class="position-absolute bottom-0 start-0 pad-palette rotate" id="palette-1-heading" >Lemon yellow</h5>
                <div className="bg-white position-absolute top-0 start-0 end-0 bottom-0"id="my-palette">
                  
                    <div className="homepage-video-container d-flex justify-content-center">
                     
                         <img src={selfie} className="d-lg-none" alt="home_image"/>
                     
                       <video  id="homepage-clip" className="d-none d-lg-flex" src={homepage_clip} type="video/mp4"  autoPlay loop muted ></video> 
                                                                
                    </div>
                </div>
              </div>
                
              {/*About me section*/}
              <div className=" min-vh-100 col position-relative" id="palette-2" >
                <h5 class="position-absolute bottom-0 end-0 pad-palette rotate">Lamp black</h5>
                <div className="position-absolute top-0 start-0 end-0 bottom-0 "id="about-me">
                  <h3 className="tomorrow-thin pb-5">About</h3>
                    <img src={about_me_image} className="d-flex d-lg-none" id="about-me-image"alt=""/>
                    <p className="tomorrow-thin pt-3">Ontisitse Manyeneng is a </p>
                </div>
              </div>
              
              {/*Works section*/}
                 <div className=" min-vh-100 col position-relative " id="palette-3" >
                <h5 class="position-absolute bottom-0 start-0 rotate pad-palette">Cadnium red light</h5>
                <div className="position-absolute top-0 start-0 end-0 bottom-0"id="work">
                  <h3 className="tomorrow-thin pb-5 text-white">Work</h3>
                </div>
              </div>

              {/*My process section*/}
                 <div className=" min-vh-100 col position-relative" id="palette-4"  >
                <h5 class="position-absolute bottom-0 end-0 rotate pad-palette">Prussian blue</h5>
                <div className="position-absolute top-0 start-0 end-0 bottom-0 overflow-hidden"id="process">
                  <h3 className="tomorrow-thin pb-5 ">My process</h3>
                  <video className=""src={process_video} type="video/mp4" autoPlay muted loop id="process-video"></video>
                </div>
              </div>

               {/*Footer section*/}
              <div className="min-vh-100 col bg-white"  id="footer">Footer</div>
            </div>
          </div>
        </div>
    
        </>
    );
};


export default Home;
