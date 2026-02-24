import { useRef } from "react";
import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Home=()=>{
  
  gsap.registerPlugin(ScrollTrigger);

   useEffect(()=>{

       const tl=gsap.timeline(
        { scrollTrigger:{
          trigger:"#home-container",
          markers:false,
          start:()=>`+= ${document.querySelector("#my-palette").offsetHeight}`,
          end:"bottom top",
          scrub:0.5,
          toggleActions:"play none none reset"
          
        }}
      );

      tl.fromTo("#my-palette",{x:0},{xPercent:100})
        .fromTo("#about-me",{x:0},{xPercent:-100})
        .fromTo("#work",{x:0},{xPercent:100})
        .fromTo("#process",{x:0},{xPercent:-100})
        },[]);

    return(
        <>
        <div >
          <div className=" container-fluid overflow-hidden" id="home-container">
            <div className="row row-cols-1" id="row" >
            {/*Introduction section*/}
              <div className=" min-vh-100 bg-success-subtle col" id="my-palette" >
              </div>
              
              {/*About me section*/}
              <div className="min-vh-100 col bg-primary text-center" id="about-me">About me</div>

              {/*Works section*/}
              <div className="min-vh-100 col bg-warning  text-center" id="work">Work</div>

              {/*My process section*/}
               <div className="min-vh-100 col bg-danger text-center" id="process">My Process</div>
               {/**/}
              <div className="col bg-secondary"  style={{height:"18rem"}} id="footer">Footer</div>
            </div>
          </div>
        </div>
    
        </>
    );
};


export default Home;
