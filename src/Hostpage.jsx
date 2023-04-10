// import { Link } from "react-router-dom";
const Host = () => {
  return (
    <section className="host">
      <div className="hostpage">
        <nav className="py-4 ps-4">
          <img src="/images/logo.png" alt="" className="img-fluid logo" />
        </nav>
        {/* <div className="w-100">
          
          <Link to="/">
            <img src="/images/logo.png" alt="" className="img-fluid logo p-4" />
          </Link>
        </div> */}
        <div className="row justify-content-between">
          <div className="col-md-2 d-none d-md-block text-start side-image">
            <img className="img-fluid" src="/images/leftimage.jpg" alt="" />
          </div>

          <div className="col-12 col-md-8 justify-content-center text-center text-md-start">
            <div className="mx-auto">
              <div className="row justify-content-evenly mx-auto">
                <div className="col-2"></div>
                <div className="col-8">
                  <div className="text-center">
                    <h4 className="text-light">Become an event host</h4>
                    <h6 className=" text-success">0% Complete</h6>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mx-auto my-3 text-light">
                <div className="col-2 d-block">
                  <div className="text-start ">
                    <p className="lead mb-0 sidelinks">01</p>
                    <p>
                      Upload <br /> Profile Image
                    </p>
                  </div>
                </div>
                <div className="col-8 text-center border-2">
                  <div className="position-relative d-flex align-content-center justify-content-center">
                    <img
                      src="/images/host-image1.png"
                      alt=""
                      className="img-fluid host-image"
                    />
                    <div className="image-caption">Reupload</div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mx-auto my-3 text-light">
                <div className="col-2 ">
                  <div className="text-start ">
                    <p className="lead mb-0 sidelinks">02</p>
                    <p>
                      Upload
                      <br /> Cover Image
                    </p>
                  </div>
                </div>
                <div className="col-8 host-img2">
                  <div className="position-relative d-flex align-content-center justify-content-center">
                    <img
                      src="/images/host-imag2.png"
                      alt=""
                      className="img-fluid hostimag"
                    />
                    <div className="image-caption">Reupload</div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mx-auto my-3 text-light">
                <div className="col-2 d-block">
                  <div className="text-start ">
                    <p className="lead mb-0 sidelinks">03</p>
                    <p>
                      Enter
                      <br /> Personal Info
                    </p>
                  </div>
                </div>
                <div className="col-8 host-img2">
                  <form className="row mx-0 vv">
                    <div className="col-6 px-0">
                      <input
                        defaultValue="Scarlett"
                        type="text"
                        className="w-100 text-light bg-dark border border-secondary rounded-2"
                      />
                    </div>
                    <div className="col-6 pe-0">
                      <input
                        type="text"
                        defaultValue="Robinson"
                        className="w-100 text-light bg-dark border border-secondary rounded-2"
                      />
                    </div>
                  </form>
                  <form className="row mx-0 vv">
                    <div className="col-6 px-0">
                      <input
                        type="text"
                        defaultValue="United States of America"
                        className="w-100 text-light bg-dark border border-secondary rounded-2"
                      />
                    </div>
                    <div className="col-6 pe-0 mb-2">
                      <input
                        type="text"
                        defaultValue="Project Manager"
                        className="w-100 text-light bg-dark border border-secondary rounded-2"
                      />
                    </div>
                    <div className="border border-secondary rounded-2">
                      <textarea
                        type="text"
                        defaultValue=""
                        className="personalInfo w-100 text-light bg-dark py-2"
                        rows="4"
                        cols="60"
                      />
                    </div>
                    <span id="char_count">100 characters remaining</span>
                  </form>
                </div>
              </div>
              <div className="row justify-content-center mx-auto my-3 text-light">
                <div className="col-2 d-block">
                  <div className="text-start ">
                    <p className="lead mb-0 sidelinks">04</p>
                    <p>
                      Enter
                      <br /> Company Info
                    </p>
                  </div>
                </div>
                <div className="col-8 host-img2">
                  <form className="col-12">
                    <input
                      defaultValue="Unpluggd"
                      type="text"
                      className="text-light col-12 mb-2 bg-dark border border-secondary rounded-2"
                    />
                    <input
                      type="text"
                      defaultValue="unpluggd.com"
                      className="text-light col-12 mb-2 bg-dark border border-secondary rounded-2"
                    />
                    <input
                      placeholder="Intro video url(optional)"
                      type="text"
                      className="text-light col-12 mb-2 bg-dark border border-secondary rounded-2"
                    />
                  </form>
                  <p className="border border-secondary p-1 rounded-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae, accusantium et aliquam sapiente, debitis commodi
                    exercitationem maxime molestias nostrum ex eius quis iste ea
                    voluptates voluptatum odit porro eveniet placeat!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-8 mx-auto mt-2 text-center">
              <button className="btn p-1 next-btn px-4">Next</button>
            </div>
          </div>
          <div className="col-2 d-none d-md-block text-end side-image bg-dark">
            <img
              className="img-fluid side-image"
              src="/images/rightimage.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Host;
