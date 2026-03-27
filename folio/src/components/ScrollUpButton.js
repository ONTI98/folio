const scrollup=()=>{

    window.scrollTo({top:0, behavior:"smooth"})
};

const ScrollUpButton=({id})=>{
    return (
        <>
        <div className="position-absolute end-0 bottom-0">
            <button onClick={scrollup} className="btn scrollupbutton"  id={id}>Scroll to Top</button>
        </div>
        </>
    )
};

export default  ScrollUpButton;