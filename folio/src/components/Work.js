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
                    trigger:"#spane-2",
                    start:"top 99.8%",
                    end:"top bottom",
                    scrub:1,

                }
            })
    })
    
    return(
                    <>
                        <div className="container-fluid">
                                <div className="row row-cols-1 row-cols-lg-1">
                                    
                            <div className="col min-vh-100  position-relative d-flex justify-content-center" id="work-intro">
                                    <Hero section="works." heading="Works"/>
                                <div className="bg-primary min-vh-100 position-absolute top-0 bottom-0 start-0 end-0" id="spane-1"></div>
                            </div>

                            {/*work 1*/}
                            <div className="col d-lg-block d-md-block border " id="spane-2">
                                <div className="col d-flex justify-content-center">
                                    <img src={poly} className="work-image"></img>
                                </div>
                                <div className="col  d-flex justify-content-center">
                                    spane title
                                </div>
                            </div>

                            {/*work 2*/}
                            <div className="col d-lg-block d-md-block " id="spane-3">
                                <div className="col d-flex justify-content-center">
                                    <img src={nagana} className="work-image"></img>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    spane title
                                </div>
                            </div>
                            
                            {/*work 3*/}
                             <div className="col d-lg-block d-md-block " id="spane-3">
                                <div className="col d-flex justify-content-center">
                                    <img src={father_to_sons} className="work-image"></img>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    spane title
                                </div>
                            </div>
                            
                            {/*work 4*/}
                             <div className="col d-lg-block d-md-block  " id="spane-3">
                                <div className="col d-flex justify-content-center">
                                    <img src={trip} className="work-image"></img>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    spane title
                                </div>
                            </div>

                             {/*work 5*/}           
                             <div className="col d-lg-block d-md-block " id="spane-3">
                                <div className="col  d-flex justify-content-center">
                                    <img src={work_self} className="work-image"></img>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    spane title
                                </div>
                            </div>

                            {/*work 6*/}
                             <div className="col d-lg-block d-md-block " id="spane-3">
                                <div className="col d-flex justify-content-center">
                                    <img src={molao} className="work-image"></img>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    spane title
                                </div>
                            </div>

                            {/*work 7*/}
                            <div className="col d-lg-block d-md-block " id="spane-3">
                                <div className="col d-flex justify-content-center">
                                    <img src={dipaki} className="work-image"></img>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    spane title
                                </div>
                            </div>

                            </div>
                        </div>
                        
                    </>
    );
};

export default Work;