import gsap from 'gsap';
import {useEffect} from  'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Hero from './Hero.js';
import doc from '../media/doc.mp4';
import Navbar from './Navbar.js';

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
            scrub:1,
            
        }})
        gsap.set(
        ["#about-me-video"],
        {willChange: "transform" })
        
    })

    return(
        <> 
        <Navbar/>
            <div className="container-fluid position-relative" id="about-container">
                
                <div className="row row-cols-1 row-cols-lg-2">
                         <div className="shadow rounded min-vh-100 col-lg-12 position-relative d-flex justify-content-center" id="about-intro">
                            {/*Hero component*/}
                            
                                <Hero section="bio." heading="Ontisitse Manyeneng"/>
                        
                               
                                <div className="shadow rounded  bg-black position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-center " id="about-me-video">
                                    
                                        <video className="p-md-5 "src={doc} type="video/mp4" id="about-video" muted playsInline autoPlay loop></video>
                                    
                                    
                                </div>
                            </div>
                            
                            {/*Biography*/}
                         <div  className="col-lg-12 px-4" id="biography">
                            <p className="tomorrow-thin">
                                <h3 className="py-5">Biography</h3> <br/>
                                Ontisitse Manyeneng, born in 1998, is a South African visual artist and oil painter.
                                His works explore the human psyche and how perceptions are shaped as a results of it. At the core of his practice, he finds inspiration from 
                                the concept of the family unit, its make-up ,origins and the role it plays in the greater society. His practice is heavily influenced by classical realism,
                                impressionism,Neo-classicism and modern-day  minimalism, where he fuses both conventional and unconventional theory to portray fundamental human commonalities.
                                <br/><br/>
                                In 2022, Manyeneng graduated with a Diploma in Fine and Applied Arts at the Tshwane University of Technology, majoring in ceramics and painting. Although mainly creating works in the oil medium,
                                he will on occasion immerse himself in the charcoal and graphite landscape.Since graduating, Manyeneng has participated in a number of group exhibitions,in Cape town 
                                and Tshwane.
                                
                            </p><br/>
                              <p className="tomorrow-thin pb-5 ">
                                <h3 className="py-5">Statement</h3>
                                

                                The series, 'Talking to you and I' is based on my curiosity regarding human paychology ,particularly social consciousness, 
                                its make-up and the factors that shape it.
                                I fall into  a landscape of imagination and create visuals based on my personal interpretation of the space I create.
                                Over the years, the series "Talking to you and I" has evolved to comment on broader issues, exploring masculinity, origins, history, language, tradition and environment.
                                At the core of it, however, is the exploration of the family unit and all the intricate details it encompasses.
                                <br/><br/>
                                This series attempts to depict those fine details and goes on to further reveal the common human connection we as the global population have.
                                The family unit sparks my interest in that it is wrapped in a lot of nuances.
                                Growing up in a nuclear family means I get the opportunity to draw direct inspiration from my upbringing,
                                explore dualities and attempt to resolve how balance brought about by the family structure inevitably influences my perception of the world.
                                <br/><br/> 
                                Upon glancing at my work, the most apparent aspect becomes the use of black figures. 
                                These figures, contrary to popular belief and originally colonialist theory, are not representations of African ethnic groups. 
                                The figures are idealised representations of the human race in  silhouette form. 
                                I use these figures to portray ideas and concepts that stem from personal introspection, very often imagination and seldom aspiration.<br className="d-lg-none"/><br className="d-lg-none"/>
                                They can often be seen in social settings, conversing, either in interior scenes or outdoor spaces adorned in linework or paintings that I have either already created or plan to bring to life.
                                My works are conversation pieces, inviting the viewer to look within and outward at the world, come back to the work and impart their most sincere feelings.


                            </p>
                        </div> 
                          
                </div>
            </div>
        </>
    );
};


export default About;
