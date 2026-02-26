
import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';



const Home=()=>{
  
  gsap.registerPlugin(ScrollTrigger);

   useEffect(()=>{
  

      const tl=gsap.timeline();

      tl.fromTo("#my-palette",{x:0},
         {xPercent:100,
          scrollTrigger:{
            trigger:"#my-palette",
            start:"top top",
            scrub:1,}})
        
      .fromTo("#about-me",{x:0},
        {xPercent:-100,
            scrollTrigger:{
            trigger:"#about-me",
            start:"top top",
            scrub:0.5,}})
        
        .fromTo("#work",{x:0},
           {xPercent:100,
            scrollTrigger:{
            trigger:"#work",
            start:"top top",
            scrub:0.5,}}
        )

        .fromTo("#process",{x:0},
            {xPercent:-100,
            scrollTrigger:{
            trigger:"#process",
            start:"top top",
            scrub:0.5,}}
        )

        .fromTo("#footer",{x:0},{xPercent:0})
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
              <div className="min-vh-100 col bg-secondary"  id="footer">Footer</div>
            </div>
          </div>
        </div>
    
        </>
    );
};


export default Home;
