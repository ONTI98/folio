const Home=()=>{
    return(

        <>
        <div>
          <div className="container-fluid">
            <div className="row row-cols-1" >
              <div className=" min-vh-100 col border border-2 text-center position-relative" id="My_palette">
                My palette
                <div className="">
                  <span className="border">Colour 1</span>
                  <span className="border">Colour 2</span>
                  <span className="border">Colour 3</span>
                  <span className="border">Colour 4</span>
                  <span className="border">Colour 5</span>
                </div>
                <p>I use a limited palette
                  <br/> Prussian Blue
                </p>
                <div className=" col border border-2 rounded  d-flex justify-content-center  " id="Video">Video</div>
              </div>
              
              <div className=" min-vh-100 col border border-2 text-center" id="About_me">About me
                <div className="col border ">
                  <h1>Ontisitse Manyeneng</h1>
                </div>
                <div className="border" id="" style={{height:"18rem"}}>
                  <p>This a paragraph about me</p>
                </div>
              </div>
              <div className=" min-vh-100 col m border border-2 text-center" id="Work">Work</div>
               <div className="min-vh-100 col border border-2 text-center" id="Work">My Process</div>
              <div className="col border border-2" id="Footer" style={{height:"18rem"}}>Footer</div>
            </div>
          </div>
        </div>
    
        </>
    );
};


export default Home;
