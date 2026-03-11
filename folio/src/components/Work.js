import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Hero from './Hero.js';
import nagana from '../media/work_nagana.jpg';
import poly from '../media/work_poly.jpg';
import father_to_sons from '../media/work_father.jpg';
import trip from '../media/work_trip.jpg';
import work_self from '../media/work_selfie.jpg';
import molao from '../media/work_molao.jpg';
import dipaki from '../media/work_dipaki.jpg';

gsap.registerPlugin(ScrollTrigger);



const Work=()=>{

const tl=gsap.timeline();

    useEffect(()=>{
        tl.fromTo("#spane-1",
            {x:"-100vw"},
            {
                x:"0%",
                scrollTrigger:{
                    trigger:"#spane-1",
                    start:"bottom 99.8%",
                    end:"top bottom",
                    scrub:1,

                }
            })
    })
    
    return(
                    <>
                        <div className="container-fluid" id="work-container">
                                <div className="row row-cols-1 row-cols-lg-1">
                                    
                            <div className=" rounded col min-vh-100  position-relative d-flex justify-content-center" id="work-intro">
                                    <Hero section="works." heading="Works"/>
                                <div className="shadow rounded bg-white min-vh-100 position-absolute top-0 bottom-0 start-0 end-0" id="spane-1">
                                </div>
                            </div>

                            {/*work 1*/}
                            <div className="col d-lg-block d-md-block " id="spane-2">
                                <div className="col d-flex justify-content-center">
                                    <img src={poly} className="work-image"></img>
                                </div>
                                <div className="col  d-flex justify-content-center position-relative">
                                    <span className="tomorrow-thinner">For maternal veneration,
                                        <br/>2000 x 3500 mm,
                                       <br/>Oil on canvas,<br/>2026
                                    </span>
                                </div>
                            </div>

                            {/*work 2*/}
                            <div className="col d-lg-block d-md-block " id="spane-3">
                                <div className="col d-flex justify-content-center">
                                    <img src={nagana} className="work-image"></img>
                                </div>
                               <div className="col  d-flex justify-content-center">
                                    <span className="tomorrow-thinner">Nagana ka these recent developments,
                                        <br/>500 x 1500 mm,
                                       <br/>Oil on canvas,<br/>2026
                                    </span>
                                </div>
                            </div>
                            
                            {/*work 3*/}
                             <div className="col d-lg-block d-md-block " id="spane-3">
                                <div className="col d-flex position-relative justify-content-center">
                                    <div className="bg-danger position-absolute top-0 end-0" id="sold-icon"></div>
                                    <img src={father_to_sons} className="work-image"></img>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <span className="tomorrow-thinner">Father to sons,
                                        <br/>910 x 2410 mm,
                                        <br/>Oil on canvas,<br/>2025
                                    </span>
                                </div>
                            </div>
                            
                            {/*work 4*/}
                             <div className="col d-lg-block d-md-block  " id="spane-3">
                                <div className="col d-flex justify-content-center">
                                    <img src={trip} className="work-image"></img>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <span className="tomorrow-thinner">Ke bana, just let them be. ,
                                        <br/>1300 x 3100 mm,
                                        <br/>Oil on canvas,<br/>2026 
                                    </span>
                                </div>
                            </div>

                             {/*work 5*/}           
                             <div className="col d-lg-block d-md-block " id="spane-3">
                                <div className="col  d-flex position-relative justify-content-center">
                                    <div className="bg-danger position-absolute top-0 end-0" id="sold-icon"></div>
                                    <img src={work_self} className="work-image"></img>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <span className="tomorrow-thinner">Self-portrait with Black,
                                        <br/>350 x 300 mm,
                                        <br/>Oil on canvas,<br/>2025
                                    </span>
                                </div>
                            </div>

                            {/*work 6*/}
                             <div className="col d-lg-block d-md-block " id="spane-3">
                                <div className="col d-flex position-relative justify-content-center">
                                    <div className="bg-danger position-absolute top-0 end-0" id="sold-icon"></div>
                                    <img src={molao} className="work-image"></img>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <span className="tomorrow-thinner">Molao ona has been set in stone,
                                        <br/>350 x 300 mm,
                                        <br/>Oil on canvas,<br/>2025
                                    </span>
                                </div>
                            </div>

                            {/*work 7*/}
                            <div className="col d-lg-block d-md-block " id="spane-3">
                                <div className="col d-flex position-relative justify-content-center">
                                    <div className="bg-danger position-absolute top-0 end-0" id="sold-icon"></div>
                                    <img src={dipaki} className="work-image"></img>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <span className="tomorrow-thinner">Dipaki tsa self-veneration ,
                                        <br/>350 x 300 mm,
                                        <br/>Oil on canvas,<br/>2025
                                    </span>
                                </div>
                            </div>

                            </div>
                        </div>
                        
                    </>
    );
};

export default Work;