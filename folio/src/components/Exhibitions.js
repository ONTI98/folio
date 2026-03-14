import Navbar from './Navbar.js';

const Exhibitions=()=>{




    return(
    
        <>
            <Navbar/>
            <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-lg-1">
                
                        <div className="min-vh-100 d-block justify-content px-5 center pb-5" id="exhibitions-1">
                            <h3 className="tomorrow-thin text-white">Exhibitions</h3>
                                <div className=" my-5">
                                    <p className="tomorrow-thin text-white">
                                            <h5>2026</h5>Investec Cape Town Art Fair VIP Programme
                                            <br/>
                                            <div className="tomorrow-thinner text-white">
                                                <a className="link-underline link-underline-opacity-0 text-white" href="https://digital.investeccapetownartfair.co.za/en-US/events/698b386739be59b84b389c6b">
                                                'Strange dualities: Contemporary interventions to a 
                                                Modernist biography' group exhibition at Erik & Claude Studio
                                                </a>
                                            </div>
                                                    
                                        </p>
                                    </div> 
                                    {/*2024*/}
                                    <div className="my-5">
                                        <p className="tomorrow-thin text-white">
                                            <h5>2024</h5>Terra Contemporary Gallery
                                            <div className="tomorrow-thinner text-white">'Talking to you and I' presentation</div>
                                            <br/>
                                            Trent Gallery
                                            <div className="tomorrow-thinner text-white">'9nine' group exhibition</div>
                                        </p>
                                    </div>

                                    <div className="my-5">
                                        <p className="tomorrow-thin text-white">
                                            <h5>2023</h5>
                                            The Secret Art Society
                                            <div className="tomorrow-thinner text-white">'In pursuit of' pop-up group exhibition</div>
                                            <br/>
                                            Trent Gallery
                                            <div className="tomorrow-thinner text-white">'8eight' group exhibition</div>
                                        </p>
                                    </div> 
                                    {/*2022*/}
                                    <div className="my-5">
                                        <p className="tomorrow-thin text-white">
                                            <h5>2022</h5>
                                            Trent Gallery
                                            <div className="tomorrow-thinner text-white">'Se7en' group exhibition</div>
                                            <br/>
                                            The Secret Art Society
                                            <div className="tomorrow-thinner text-white">'Ripple' group exhibition</div>
                                        </p>  
                                    </div> 
                                    <h3 className="tomorrow-thin text-white">Auctions</h3>
                                            <p className="tomorrow-thin text-white">
                                            Russel Kaplan Auctioneers
                                            <div className="tomorrow-thinner text-white">
                                                <a className="link-underline link-underline-opacity-0 text-white" href="https://bidlive.rkauctioneers.co.za/auctions/4-IDIG2Y/the-very-merry-wunderkammer-auction-20-30-november-2025?limit=36&search=ONTISITSE">
                                                    2025: A Very merry Wunderkammer Auction
                                                </a>
                                            </div>
                                            </p>
                            </div>
                    </div>
                
            </div>
                
                       

        </>
    );
};


export default Exhibitions;