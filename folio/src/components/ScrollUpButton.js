const scrollup=()=>{

    window.scrollTo({top:0, behavior:"smooth"})
};

const ScrollUpButton=({id})=>{
    return (
        <>
        <div className="position-absolute  end-0 bottom-0 mx-5 d-flex justify-content center m-2" id="scrollupbutton-container" >
            
            <button onClick={scrollup} className="btn scrollupbutton shadow rounded-pill mb-2 "  id={id}>
                Back to Top
                <i className="fa fa-xl fa-arrow-up"></i></button>
                
        </div>
        </>
    )
};

export default  ScrollUpButton;