import { Link } from "react-router-dom";
const Create = () => {
  return (
    <section className="create mx-2">
      <div className="justify-content-between mx-auto">
        <div className="text-center">
          <h4 className="text-light">Create your Event</h4>
          <h6 className=" sidelinks">Preview Publish</h6>
        </div>
        <div className="row  text-light">
          <div className="col-sm-12 col-md-10 justify-content-between">
            <div className="row mx-auto py-4 justify-content-between">
              <div className="col-4">
                <Link
                  to="#sidebar"
                  className=""
                  role="button"
                  aria-controls="sidebars"
                  data-bs-toggle="offcanvas"
                >
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="img-fluid img"
                  />
                </Link>
              </div>

              <div className="col-sm-6 col-lg-4 text-light">
                <span>
                  <i className="bi bi-clock px-2"></i>starting in 3 days, 44
                  mins
                </span>
              </div>
            </div>
            <div className="row">
              <h5 className=""> Guiter Meditation Session</h5>
              <div className="row justify-content-between">
                <div className="col-4  mx-auto">
                  <p>Be the first to join</p>
                </div>
                <div className="col-3">
                  <span>
                    <i className="bi bi-people px-2"></i>
                  </span>
                  <span>
                    <i className="bi bi-gender-male"></i>
                  </span>
                  <span>
                    <i className="bi bi-gem px-2"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="row tickets mb-3 px-3 mx-auto">
              <div className="border border-danger rounded-3 p-3">
                <h5>Tickets Available</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Recusandae ullam soluta adipisci itaque!
                </p>
                <p>*User has to purchase the same type of tickets</p>
              </div>
            </div>
            <div className="row mx-auto">
              <div className="row d-block d-md-flex justify-content-between mb-3">
                <div className="col-md-3 m-0">
                  <h6> New Member Ticket</h6>
                  <p className="desc-text mb-3">8 tickets Avalaible</p>
                </div>
                <div className="col-3">
                  <form className="justify-content-end">
                    <input
                      type="text"
                      defaultValue="Quantity"
                      className="text-light bg-dark border px-1 py-2 border-secondary rounded-2"
                    />
                  </form>
                </div>
              </div>
              <div className="row d-block d-md-flex justify-content-between mb-3">
                <div className="col-md-3 m-0 ">
                  <h6> VIP Tickets</h6>
                  <p className="desc-text text-danger mb-3">2 tickets Left</p>
                </div>
                <div className="col-3 justify-content-center">
                  <form className="justify-content-end">
                    <input
                      type="text"
                      defaultValue="Quantity"
                      className="text-light  bg-dark border px-1 py-2 border-secondary rounded-2"
                    />
                  </form>
                </div>
              </div>
              <div className="ticket-btn row mb-3 d-block d-md-flex justify-content-between align-items-center">
                <button className="col-md-2 btn mb-2 btn-light py-2 create-btn">
                  Total: $0
                </button>
                <button className="col-md-2 btn btn-secondary py-2 create-btn">
                  Purchase Now
                </button>
              </div>
            </div>

            <div className="row w-100">
              {/* <div className="col-12 w-100 h-50">
                <video
                className="img-fluid w-100 h-100"
                 src="">

                </video>
              </div> */}
              <div className="col-12 w-100 embed-responsive embed-responsive-21by9">
                <iframe
                  className="embed-responsive-item"
                  src="/images/demo-video.mp4"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="row text-left">
              <div className="col-12">
                <h5 className="">Event Description</h5>
                <p className="lead desc-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  hic laborum voluptatibus ipsa officiis exercitationem, tempora
                  ipsam ab eaque facilis. Id, doloremque consectetur!
                  Reiciendis, totam inventore? Tempore ea nisi quam ipsa aperiam
                  et. Ducimus, esse recusandae incidunt reiciendis impedit
                  debitis. Enim nesciunt quae voluptatem quisquam quod ut
                  doloribus repudiandae eum.
                </p>
                <p className="lead desc-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, laboriosam. Quidem accusamus suscipit sit
                  delectus odio quas labore repudiandae placeat nemo quae minus
                  totam, asperiores quod, nam fugit quisquam velit iure.
                  Deleniti mollitia nemo cupiditate est iste sequi reiciendis
                  maiores.
                </p>
              </div>
            </div>
            <div className="row mx-auto host-desc mb-3 border border-dark rounded-2">
              <div className="col-12 p-1 text-light">
                <div className="row justify-content-between">
                  <div className="col-7">
                    <div className="row">
                      <div className="col-12 d-flex">
                        <div className="col-4">
                          <img
                            src="/images/host-image1.png"
                            alt=""
                            className="img-fluid rounded-circle"
                          />
                        </div>
                        <div className="col-7">
                          <p className="lead mb-0">Event Host</p>
                          <p className="text-success diff">Scarlett Robinson</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 justify-content-flex-end">
                    <button className="btn btn-dark px-2 py-1 border border-success">
                      Unfollow
                    </button>
                  </div>
                </div>
                <div className="row">
                  <p className="lead">About the host</p>
                  <div className="text-left m-1 row align-items-flex-start">
                    <span className="col-1 me-3">
                      <em>
                        <i className="bi bi-quote quote"></i>
                      </em>
                    </span>
                    <div className="desc-text col-9">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusamus cum expedita ut ratione omnis fugit? Maxime
                      minus
                      <br />
                      possimus laudantium mollitia id recusandae optio
                      reiciendis nesciunt quos facilis. Beatae, atque quam.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center add-friends host-desc mb-3 border border-dark rounded-2">
              <div className="col-3 mx-auto mail">
                <span className="mx-auto text-muted">
                  <i className="bi bi-envelope-paper mail-icon"></i>
                </span>
              </div>
              <div className="col-9 p-1 text-center mx-auto">
                <p className="lead desc-text">
                  Do you want to invite your friends to join as well
                </p>
                <button className="btn desc-text next-btn mb-3">
                  Send them an invite now
                </button>
              </div>
            </div>
            <div className="row mt-4 py-2 justify-content-center actions-row">
              <div className="col-sm-5 col-lg-4 text-center border border-success">
                <button className="btn text-success">Back</button>
              </div>
              <div className="col-sm-5 col-lg-2 mx-1 text-center next-btn">
                <button className="btn text-light">Create Event</button>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-none d-md-block  m-0">
            <div className="">
              <div className="w-100 event-image">
                <img
                  src="/images/guitar-dude.jpg"
                  alt=""
                  className="img-fluid border rounded-2 mb-2"
                />
              </div>
              <div className="w-100 event-image">
                <img
                  src="/images/event-image2.jpg"
                  alt=""
                  className="img-fluid border rounded-2 mb-2"
                />
              </div>
              <div className="w-100 event-image">
                <img
                  src="/images/event-image3.jpg"
                  alt=""
                  className="img-fluid border rounded-2 mb-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="offcanvas create-sidebar offcanvas-start bg-dark"
        id="sidebar"
        tabIndex="-1"
        aria-labelledby="sidebar-label"
      >
        <div className="offcanvas-heading">
          <div className="offcanvas-heading">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="sidebar-label">
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="img-fluid img"
                  />
                </Link>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className=" sidelinks">
                <li>
                  <Link>Events Generals</Link>
                </li>
                <li>
                  <Link>Create Tickets</Link>
                </li>
                <li>
                  <Link>Connect Social</Link>
                </li>
                <li>
                  <Link>Preview Publish</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <p className="lead"></p>
        </div>
      </div>
    </section>
  );
};

export default Create;
