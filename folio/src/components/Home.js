import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import homepage_clip from '../media/homepage_clip1.mp4';
import selfie from '../media/selfie 11-4-2-2.jpg';
import about_me_image from '../media/about_me.jpg';
import process_video from '../media/website_clip.mp4'


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

       
        ScrollTrigger.create(
        { 
          trigger:"#about-me",
          start:"top 30%",
          end:"400% 200vh ",
          toggleClass:{targets:"#nav,#palette-1-heading", className:"nav-hidden"}
        }
        )
       

      },[]);

    return(
        <>
       
        <div >
   
          <div className=" container-fluid overflow-hidden position-relative" id="home-container">
            <div className="row row-cols-1" id="row" >
            {/*Introduction section*/}
              <div className=" min-vh-100 col position-relative" id="palette-1" >
                <h6 class="position-absolute bottom-0 start-0 pad-palette rotate" id="palette-1-heading" >Lemon yellow</h6>
                <div className="bg-white position-absolute top-0 start-0 end-0 bottom-0"id="my-palette">
                  
                    <div className="homepage-video-container d-flex justify-content-center">
                     
                         <img src={selfie} className="d-lg-none" alt="home_image"/>
                     
                       <video  id="homepage-clip" className="d-none d-lg-flex" src={homepage_clip} type="video/mp4"  autoPlay loop muted ></video> 
                                                                
                    </div>
                </div>
              </div>
                
              {/*About me section*/}
              <div className=" min-vh-100 col position-relative" id="palette-2" >
                <h6 class="position-absolute bottom-0 end-0 pad-palette rotate">Lamp black</h6>
                <div className="position-absolute top-0 start-0 end-0 bottom-0 "id="about-me">
                  <h3 className="tomorrow-thin p-5" >About</h3>
                    <img src={about_me_image} className="d-flex" id="about-me-image"alt=""/>
                    <p className="tomorrow-thin p-5 d-none d-lg-flex d-sm-none ">Ontisitse Manyeneng, born in 1998, is a South African visual artist and oil painter.
                      His works explore the human psyche and how perceptions are shaped as a results of it. At the core of his practice, he finds inspiration from 
                      the concept of the family unit, its make-up ,origins and the role is plays in the greater society. His practice is heavily inluenced by classical realism,
                      impressionism,Neo-classicism and modern-day  minimalism, where he fuses both convetional and uncoventional theory to portray fundamental human commonalities.
                       </p>
                       <a className="link-underline link-underline-opacity-0 tomorrow-thinner text-primary d-none d-lg-flex justify-content-center" href="/about" >Read more</a>
                      <p className="tomorrow-thin p-5  d-sm-flex d-lg-none">Ontisitse Manyeneng, born in 1998, is a South African visual artist and oil painter.
                      His work explores the human psyche and how perceptions are shaped as a results of it. At the core of his practice, he finds inspiration from 
                      the concept of the family unit, its make-up ,origins and the role is plays in the greater society...<br/>
                      <a className="link-underline link-underline-opacity-0 tomorrow-thinner text-primary d-lg-none d-flex d-md-none justify-content-end" href="/about" >Read more</a>
                      </p>
                      <a className="link-underline link-underline-opacity-0 tomorrow-thinner text-primary d-none d-lg-none d-flex d-md-flex justify-content-center" href="/about" >Read more</a>

                      
                      
                </div>
                
              </div>
              
              {/*Works section*/}
                 <div className=" min-vh-100 col position-relative " id="palette-3" >
                <h6 class="position-absolute bottom-0 start-0 rotate pad-palette text-white">Cadnium red light</h6>
                <div className="position-absolute top-0 start-0 end-0 bottom-0"id="work">
                  <h3 className="tomorrow-thin p-5 text-white">Work</h3>
                  
                  <div className="d-flex justify-content-center" style={{"padding-top":"12rem"}} id="see-more-container" >
                    <a href="/work" className="text-white link-underline link-underline-opacity-0 " >
                      <i className=" bx bx-arrow-to-right bx-lg d-flex justify-content-center rounded bx-flashing" id="see-more-icon"></i> 
                      <div className="tomorrow-thin text-white">See more</div> 
                    </a> 
                  </div>
                </div>
              </div>

              {/*My process section*/}
                 <div className=" min-vh-100 col position-relative" id="palette-4"  >
                <h6 class="position-absolute bottom-0 end-0 rotate pad-palette">Prussian blue</h6>
                <div className="position-absolute top-0 start-0 end-0 bottom-0 overflow-hidden"id="process">
                  <h3 className="tomorrow-thin p-5 ">My process</h3>
                  <video className=""src={process_video} type="video/mp4" autoPlay muted loop id="process-video"></video>
                  <a className="link-underline link-underline-opacity-0 tomorrow-thin text-white d-flex justify-content-center pt-5" href="/process" >
                      Read about my process</a>

                  
                </div>
              </div>

               {/*Footer section*/}
              <div className="min-vh-100 col bg-white d-lg-flex d-sm-block d-md-flex p-5"  id="footer">
               <div className="col border bg-success">Contact Ontisitse Manyeneng</div>
               <div className="col border bg-primary">This website is designed and maintained by </div>
              </div>
            </div>
          </div>
        </div>
    
        </>
    );
};


export default Home;
