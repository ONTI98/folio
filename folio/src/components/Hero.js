

const Hero=({heading})=>{

    return(
        <>
            <div id="hero">
                <h3 className="tomorrow-thin d-flex justify-content-center ">{heading}</h3>
                <p>Scroll down to reveal bio</p>
            </div> 
        </>
    )
};



export default Hero;