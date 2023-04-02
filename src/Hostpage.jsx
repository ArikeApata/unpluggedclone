// import { Link } from "react-router-dom";
const Host = () => {
  return (
    <section className="host">
      <div className="hostpage">
        <nav className="p-4">
          <img src="/images/logo.png" alt="" className="img-fluid logo p-4" />
        </nav>
        {/* <div className="w-100">
          
          <Link to="/">
            <img src="/images/logo.png" alt="" className="img-fluid logo p-4" />
          </Link>
        </div> */}
        <div class="row justify-content-between">
          <div class="col-md-1 text-center side-image">
            <img class="img-fluid" src="/images/leftimage.jpg" alt="" />
          </div>

          <div class="col-md-10 justify-content-center text-center text-md-start">
            <div className="container mx-auto">
              <div className="text-center">
                <h4 className="text-light">Become an event host</h4>
                <h6 class=" text-success">0% Complete</h6>
              </div>
              <div className="row mx-auto my-3 text-light">
                <div className="col-2 d-block">
                  <div className="text-start ">
                    <p className="lead mb-0 sidelinks">01</p>
                    <p>
                      Upload <br /> Profile Image
                    </p>
                  </div>
                </div>
                <div className="col-8 text-center border-2">
                  <img
                    src="/images/host-image1.png"
                    alt=""
                    className="img-fluid host-image"
                  />
                </div>
              </div>
              <div className="row mx-auto my-3 text-light">
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
                  <img
                    src="/images/host-imag2.png"
                    alt=""
                    className="img-fluid hostimag"
                  />
                </div>
              </div>
              <div className="row mx-auto my-3 text-light">
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
                  <form className="col-12 d-flex vv">
                    <input
                      defaultValue="Scarlett"
                      type="text"
                      className="text-light bg-dark border border-secondary rounded-2"
                    />
                    <input
                      type="text"
                      defaultValue="Robinson"
                      className="text-light bg-dark border border-secondary rounded-2"
                    />
                  </form>
                  <form className="col-12 d-flex vv">
                    <input
                      type="text"
                      defaultValue="United States of America"
                      className="text-light bg-dark border border-secondary rounded-2"
                    />
                    <input
                      type="text"
                      defaultValue="Project Manager"
                      className="text-light bg-dark border border-secondary rounded-2"
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
              <div className="row mx-auto my-3 text-light">
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
              <button className=" btn p-1 next-btn">Next</button>
            </div>
          </div>
          <div class="col-1 text-center side-image bg-dark">
            <img
              class="img-fluid side-image"
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
