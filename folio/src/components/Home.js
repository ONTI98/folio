import { useRef } from "react";
import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home=()=>{
  
  //const boxRef=useRef(null);

  useEffect(()=>{
    
    //const element=boxRef.current;                                     //declare the element using.
    gsap.fromTo(".box",{rotation: 0},
      {rotation:180,
      duration:3,
      scrollTrigger:{
        trigger:".box",
        start:"top 60%",
        end:"top 40% ",
        scrub:3,
        markers:true,
      }
      
    })      //the fromTo method takes two argument objects
    },[]);                                                            // empty array

    return(
        <>
        <div >
          <div className="container-fluid ">
            <div className="row row-cols-1" >
              <div className=" min-vh-100 col border text-center position-relative" id="My-palette">
                My palette

                <div className="border">
                  <span className="border">Colour 1</span>
                  <span className="border">Colour 2</span>
                  <span className="border">Colour 3</span>
                  <span className="border">Colour 4</span>
                  <span className="border">Colour 5</span>
                </div>
                <p>I use a limited palette
                  <br/> Prussian Blue
                </p>
                

              </div>
              <div className="box" ></div>
              <div className="col border border-2 position-relative " style={{height:"14rem"}} >
                <div className="col border rounded text-center position-absolute start-50 translate-middle " id="Video" >Video</div>
              </div>
              <div className="min-vh-100 col border border-2 text-center" id="About_me">About me
                <div className="col border ">
                  <h1>Ontisitse Manyeneng</h1>
                </div>
                <div className="border" id="" style={{height:"18rem"}}>
                  <p>This a paragraph about me</p>
                </div>
              </div>
              <div className="min-vh-100 col m border border-2 text-center" id="Work">Work</div>
               <div className="min-vh-100 col border border-2 text-center" id="Work">My Process</div>
              <div className="col border border-2" id="Footer" style={{height:"18rem"}}>Footer</div>
            </div>
          </div>
        </div>
    
        </>
    );
};


export default Home;
