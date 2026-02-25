import Hero from './Hero';
import gsap from 'gsap';
import {useEffect} from  'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const About=()=>{

    {/*gsap animation*/}
    useEffect(()=>{
       gsap.fromTo("#about-me-video",
        {x:"-100vw"},
        { 
            x:"0vw",
            scrollTrigger:{
            trigger:"#biography",
            start:"bottom bottom",
            end:"top bottom",
            markers:true,
            scrub:2,

        }}) 
    },[])



    
    return(
        <>
        
            <div className="min-vh-100 container-fluid" id="about-container">
                <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col border" id="about-container">
                        </div>
                        {/* below video and animation*/}
                         <div className="col-lg-12 bg-warning position-relative" id="biography">
                                <p>biography</p>
                                <div className="col-lg-12 bg-success position-absolute top-0 start-0 bottom-0 end-0" id="about-me-video">
                                    Video
                                </div>
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
