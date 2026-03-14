import gsap from 'gsap';
import {useEffect} from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Hero from './Hero.js';
import process_raw from '../media/process_raw.jpg';
import process_stretcher from '../media/process_stretcher.jpg';
import Navbar from './Navbar.js';


gsap.registerPlugin(ScrollTrigger);

const Process=()=>{

   
const tl=gsap.timeline();

    useEffect(()=>{
        
        tl.fromTo("#process-1",
            {x:"-100vw"},
            {
                x:"0%",
                
                scrollTrigger:{
                  
                    trigger:"#process-1",
                    start:"bottom 99.8%",
                    end:"top bottom",
                    scrub:1,

                }
            })
        gsap.set(
        ["#process-1"],
        {willChange: "transform" })
    })
  

    return(
    
        <>
            <Navbar/>
                        <div className="container-fluid" id="process-container">
                                <div className="row row-cols-1 row-cols-lg-1">
                            {/*Hero section*/}
                            <div className="shadow rounded col min-vh-100  position-relative overflow-hidden d-flex justify-content-center" id="process-intro">
                                  <Hero section="process" heading="My process"/>
                                <div className="rounded min-vh-100 position-absolute top-0 bottom-0 start-0 end-0" id="process-1">
                                   
                                </div>
                            </div>
                            <div className="col min-vh-100 d-flex justify-content-center position-relative py-5 px-4" id="process-2">
                                <p className="tomorrow-thin">
                                    <h3 className="position-absolute start-0  px-4" >Canvas stretching</h3>
                                    <div className="py-3 d-flex justify-content-center" id="process-raw-image-container">
                                        <img  className="rounded" src={process_raw} id="process-raw-image"></img>
                                    </div>
                                    
                                    <br/><br/>
                                    Preparing a canvas involves a 2-day process, where cotton duck canvas is stretched over a large home-made device with nails and hooks for attaching the canvas.
                                    the canvas is later drenched in water and dried to remove wrinkles and possible dirt.The most important step after drying the canvas is sizing.<br className="d-lg-none"/><br className="d-lg-none"/><b>Size</b> acts as a stiffening agent. It is generally a glue.
                                    When applying size, the canvas has to be slightly damp to allow the glue to adhere to the canvas properly. The second layer of size can be applied after the first one dries. 
                                    Traditionally, hide glue was used on belgian linen canvases. To this day some manufacterers employ <b>RSG</b> (Rabbit Skin Glue).With time,cotton duck became
                                     the alternative.However, since cotton becomes brittle when 
                                    sized with RSG, synthetic glue became the perfect size for it.
                                    <br/><br/>
                                    Sizing is crucial in the first stages of canvas preparation
                                    to ensure durability.It acts as barrier between the canvas and the primer. If the sizing step is skipped , Oil pigments will penetrate the canvas. Since cotton is
                                    a natural fibre, it might decay as a result of fibre rot.<br/>
                                    The final stage is priming, where oil-based Titanium white paint is applied in two to three layers directly on top of the size. 
                                </p>
                            </div> 
                            
                                   <div className="col min-vh-100 d-flex justify-content-center position-relative py-5 px-4" id="process-2">
                                <p className="tomorrow-thin">
                                    <h3 className="position-absolute start-0  px-4" >Stretcher bars / Strainers</h3>
                                    <div className="py-3 d-flex justify-content-center ">
                                        <img className="rounded" src={process_stretcher} id="process-stretcher-image"></img>
                                    </div>
                                    <br/><br/>
                                    There are two types of frames that canvases are streched over,namely stretcher bars and strainer frames.<b>Strainers</b> are a more affordable and accessible.They are generally locked in place by
                                    air nails and glue. When made in smaller sizes,they will go for long periods of time without any deformities.On the other hand, are Strecher bars<br/><br/>

                                    <b>Stretcher bars</b> are a fairly costly,more durable option for stretching a canvas. they are the go-to for many high-end art supply stores and my personal favourite
                                    stretching frames.Their formation is neither bound by glue nor nails but by wood joinery. A standard mortise and tenon joint or a mitered-bridle joint works well for the stretcher bar 
                                    application.Every joint has small slots for inserting small wooden shims called <b>keys</b>.<br/><br/> 
                                    Keys, when hammered ensure that the canvas keeps tension. When a canvas loses tension over time,
                                    keys are hammered further into their slots to ensure tension exists without the need to restaple the entire canvas. Stretcher bars are far superior in design to strainers. 
                                    My works are completed with an <b>8-key stretcher</b> system for
                                    medium and large-sized canvases, whereas smaller pieces are usually accompanied by a <b>4-key stretcher</b> system or a strainer with cross members.
                                  

                                    
                                </p>
                            </div>
                            </div>
                        </div>

        </>
    );
};


export default Process;