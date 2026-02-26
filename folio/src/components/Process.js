import gsap from 'gsap';
import {useEffect} from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Process=()=>{

   
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
                    togggleAction:"play pause none none",

                }
            })
    })
    


    return(
        <>
         
                        <div className="container-fluid">
                                <div className="row row-cols-1 row-cols-lg-1">
                                    
                            <div className="col bg-success min-vh-100 border position-relative" id="process-intro">
                                    <p>process intro</p>
                                <div className="border bg-primary min-vh-100 position-absolute top-0 bottom-0 start-0 end-0" id="spane-1">
                                    spane 1
                                </div>
                            </div>


                            <div className="col min-vh-100 border" id="spane-2">
                            </div> 
                            <div className="col min-vh-100 border" id="spane-3">
                            </div>
                            <div className="col min-vh-100 border" id="spane-4">
                            </div>         
                            <div className="col min-vh-100 border" id="spane-5">
                            </div> 
                            </div>
                        </div>

        </>
    );
};


export default Process;