import { useRef } from "react";
import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Home=()=>{


    return(
        <>
        <div >
          <div className="container-fluid ">
            <div className="row row-cols-1" >
            {/*Introduction section*/}
              <div className=" min-vh-100 bg-success col" id="My-palette">
              </div>
              
              {/*About me section*/}
              <div className="min-vh-100 col bg-primary text-center" id="About_me">About me</div>

              {/*Works section*/}
              <div className="min-vh-100 col bg-warning  text-center" id="Work">Work</div>

              {/*My process section*/}
               <div className="min-vh-100 col bg-danger text-center" id="Work">My Process</div>
               {/**/}
              <div className="col bg-secondary" id="Footer" style={{height:"18rem"}}>Footer</div>
            </div>
          </div>
        </div>
    
        </>
    );
};


export default Home;
