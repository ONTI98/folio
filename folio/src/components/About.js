import gsap from 'gsap';
import {useEffect} from  'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Hero from './Hero.js';

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
        
    })

    return(
        <> 
            <div className="min-vh-100 container-fluid position-relative" id="about-container">
                
                <div className="row row-cols-1 row-cols-lg-2">
                         <div className="min-vh-100 col-lg-12 position-relative d-flex justify-content-center" id="about-intro">
                            {/*Hero component*/}
                            
                                <Hero section="bio." heading="Ontisitse Manyeneng"/>
                        
                               
                                <div className="col-lg-12 bg-success position-absolute top-0 start-0 bottom-0 end-0" id="about-me-video">
                                    Video goes here
                                </div>
                            </div>
                            
                            {/*Biography*/}
                         <div  className="min-vh-100 col-lg-12 px-4" id="biography">
                            <p className="tomorrow-thin">
                                <h3 className="pb-2 pt-5">Biography</h3> <br/>
                                Ontisitse Manyeneng, born in 1998, is a South African visual artist and oil painter.
                                His works explore the human psyche and how perceptions are shaped as a results of it. At the core of his practice, he finds inspiration from 
                                the concept of the family unit, its make-up ,origins and the role is plays in the greater society. His practice is heavily inluenced by classical realism,
                                impressionism,Neo-classicism and modern-day  minimalism, where he fuses both convetional and uncoventional theory to portray fundamental human commonalities.
                                <br/><br/>
                                In 2022, Manyeneng graduated with a Diploma in Fine and applied art, majoring in Ceramics and painting.Although mainly creating works in the oil medium,
                                he will on occasion immerse himself in the charcoal and graphite landscape.Since graduating, Manyeneng has participated in a number of group exhibitions,in Cape town 
                                and Tshwane.
                                
                            </p>
                        </div> 
                        {/*Statement*/}   
                         <div  className="min-vh-100 col-lg-12 pb-2 pt-5 px-4" id="statement">
                            <p className="tomorrow-thin">
                                <h3 className="py-5">Statement</h3>
                                

                                The series, 'Talking to you and I' is based on my curiosity regarding human thought processes.
                                In my exploration, I aim to look beyond the surface of thought.
                                I fall into  a landscape of imagination and create visuals based on my personal interpretation of the space I create.
                                Over the years, the series "Talking to you and I" has evolved to comment on broader issues, touching on masulinity,origins,tradition and environment.
                                At the core of it, however, is the exploration of the family unit and all the intricate details that it encompasses.
                                <br/><br/>
                                This series attempts to depict those fine details and goes on to further reveal the common human connection we as the global population have.
                                The family unit sparks my interest in that it is wrapped in a lot of nuances.
                                Growing up in a nuclear family means I get the opportunity to draw direct inspiration from my upbringing,
                                explore dualities and figure out how balance brought about by the family structure inevitably influences my perception of the world.
                                <br/><br/> 
                                Upon glancing at my work, the most apparent aspect becomes the use of black figures. 
                                These figures, contrary to popular belief and originally colonialist theory, are not representations of African ethnic groups. 
                                The figures are mere representations of the human race in a silhouette form. 
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
