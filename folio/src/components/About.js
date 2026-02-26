import gsap from 'gsap';
import {useEffect} from  'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About=()=>{


 const tl=gsap.timeline();

    useEffect(()=>{
        
        tl.fromTo("#about-me-video",
        {x:"-100vw"},
        { 
            x:"0vw",
            scrollTrigger:{
            trigger:"#biography",
            start:"top 99.8%",
            end:"top bottom",   
            toggleAction:"play pause none none",
            
        }})
        
    })

    return(
        <> 
            <div className="min-vh-100 container-fluid position-relative" id="about-container">
                
                <div className="row row-cols-1 row-cols-lg-2">
                         <div className="min-vh-100 col-lg-12 bg-warning position-relative  " id="about-intro">
                                <p>intro</p>
                                <div className="col-lg-12 bg-success position-absolute top-0 start-0 bottom-0 end-0" id="about-me-video">
                                    Video
                                </div>
                            </div>
                         <div  className="min-vh-100 col-lg-12 border" id="biography">
                                <p>Biography</p>
                        </div>    
                         <div  className="min-vh-100 col-lg-12 border" id="statement">
                                <p>Statement</p>
                        </div>
                </div>
            </div>
        </>
    );
};


export default About;
