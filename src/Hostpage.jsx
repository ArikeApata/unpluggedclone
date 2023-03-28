import { Link } from "react-router-dom";
const Host = () => {
  return (
    <section className="host">
      <div className="hostpage">
        <div className="mx-5 py-5">
          <Link to="/">
            <img src="/images/logo.png" alt="" className="img-fluid img" />
          </Link>
        </div>
        <div class="row justify-content-between align-items-center">
          <div class="col-sm-2 text-center h-50">
            <img class="img-fluid " src="/images/leftimage.jpg" alt="" />
          </div>
          <div class="col-md-8 text-center text-md-start">
            <div className="text-center">
              <h4 className="text-light">Become an event host</h4>

              <h6 class=" text-success">0% Complete</h6>
            </div>
            <div className="row mx-auto justify-content-between text-light">
              <div className="col-5 d-block">
                <div className="text-start ">
                    <p className="lead mb-0 sidelinks">
                        01
                    </p>
                    <p>Upload <br/> Profile Image</p>
                </div>
              </div>
              <div className="col-5 border-2">
               <img src="/images/host-image1.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div class="col-sm-2 text-center h-50">
            <img class="img-fluid " src="/images/leftimage.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Host;
