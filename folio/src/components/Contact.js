
const Contact=()=>{
    return(
        
        <>
        <div className="container-fluid " id="contact-container">
            <div className="row row-cols-1 row-cols-lg-1 border" id="contact">
                <div className="min-vh-100 d-block justify-content px-5 center" id="contact-1">
                    <h3 className="tomorrow-thin text-white">Contact</h3>
                        <div className="my-5">
                            <p className="text-white">
                                <h5 className="tomorrow-thinner">Instagram</h5>
                                    <i className="fa fa-brands fa-instagram"></i>
                                <br/>
                                <div className="mt-4 text-white">
                                    <h5 className="tomorrow-thinner">Email</h5>
                                    <i className="fa fa-envelope "></i>
                                </div>
                                            
                            </p>
                        </div> 
                </div>
            </div>
        </div>
        </>
    )
   
}
export default Contact;