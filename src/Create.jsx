import { Link } from "react-router-dom";
const Create = () => {
  return (
    <section className="create mx-2">
      <div className="container">
        <div className="justify-content-between mx-auto">
          <div className="text-center">
            <h4 className="text-light">Create your Event</h4>
            <h6 className="sidelinks text-success">Preview Publish</h6>
          </div>
          <div className="row text-light">
            <div className="col-sm-12 col-md-10 justify-content-between">
              <div className="container-md text-light">
                <div className="d-flex mx-auto py-4 justify-content-between">
                  <div className="w-30">
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
                        className="img-fluid create-logo"
                      />
                    </Link>
                  </div>

                  <div className="text-light">
                    <span>
                      <i className="bi bi-clock px-2"></i>starting in 3 days, 44
                      mins
                    </span>
                  </div>
                </div>
                <div className="row">
                  <h5> Guiter Meditation Session</h5>
                  <div className="d-flex justify-content-between">
                    <div className="ps-5">
                      <p>Be the first to join</p>
                    </div>
                    <div className="">
                      <span className="me-3">
                        <i className="bi bi-people px-2"></i>
                      </span>
                      <span className="me-3">
                        <i className="bi bi-gender-male"></i>
                      </span>
                      <span className="">
                        <i className="bi bi-gem px-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="tickets d-flex p-3">
                    <div className="text-light">
                      <img
                        src="/images/party-icon.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <h5>Tickets Available</h5>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Recusandae ullam soluta adipisci itaque!
                      </p>
                      <p>*User has to purchase the same type of tickets</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="d-block d-md-flex justify-content-between mb-3">
                    <div className="m-0">
                      <h6> New Member Ticket</h6>
                      <p className="desc-text mb-3">8 tickets Avalaible</p>
                    </div>
                    <div className="">
                      <form className="justify-content-end">
                        <input
                          type="text"
                          defaultValue="Quantity"
                          className="text-light bg-dark border px-1 py-2 border-secondary rounded-2"
                        />
                      </form>
                    </div>
                  </div>
                  <div className="d-block d-md-flex justify-content-between mb-3">
                    <div className="m-0 ">
                      <h6> VIP Tickets</h6>
                      <p className="desc-text text-danger mb-3">
                        2 tickets Left
                      </p>
                    </div>
                    <div className="justify-content-center">
                      <form className="justify-content-end">
                        <input
                          type="text"
                          defaultValue="Quantity"
                          className="text-light  bg-dark border px-1 py-2 border-secondary rounded-2"
                        />
                      </form>
                    </div>
                  </div>
                  <div className="ticket-btn mb-3 d-block d-lg-flex justify-content-between align-items-center">
                    <button className="btn btn-light p-2 create-btn">
                      Total: $0
                    </button>
                    <button className="btn btn-secondary py-2 px-5 create-btn">
                      Purchase Now
                    </button>
                  </div>
                </div>
                <div className="advideo mb-3 border border-dark rounded-2 w-100 embed-responsive embed-responsive-21by9">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/ZU_RfBH_I3I"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="text-left my-2">
                  <div className="">
                    <h5 className="">Event Description</h5>
                    <p className="lead desc-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum hic laborum voluptatibus ipsa officiis
                      exercitationem, tempora ipsam ab eaque facilis. Id,
                      doloremque consectetur! Reiciendis, totam inventore?
                      Tempore ea nisi quam ipsa aperiam et. Ducimus, esse
                      recusandae incidunt reiciendis impedit debitis. Enim
                      nesciunt quae voluptatem quisquam quod ut doloribus
                      repudiandae eum.
                    </p>
                    <p className="lead desc-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit, laboriosam. Quidem accusamus suscipit sit
                      delectus odio quas labore repudiandae placeat nemo quae
                      minus totam, asperiores quod, nam fugit quisquam velit
                      iure. Deleniti mollitia nemo cupiditate est iste sequi
                      reiciendis maiores.
                    </p>
                  </div>
                </div>
                <div className="row mx-auto host-desc mb-3 border border-dark rounded-2">
                  <div className="text-light">
                    <div className="p-2 me-0 d-flex justify-content-between">
                      <div className="d-flex">
                        <img
                          src="/images/host-image1.png"
                          alt=""
                          className="img-fluid pfp rounded-circle"
                        />
                        <div className="div">
                          <p className="lead mb-0">Event Host</p>
                          <p className="text-success diff">Scarlett Robinson</p>
                        </div>
                      </div>

                      <div className="div">
                        <button className="btn btn-dark border border-success">
                          Unfollow
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <p className="lead">About the host</p>
                      <div className="row justify-content-center align-items-center">
                        <span className="col-1">
                          <em>
                            <i className="bi bi-quote quote"></i>
                          </em>
                        </span>
                        <div className="col-11">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Accusamus cum expedita ut ratione omnis fugit?
                          Maxime minus
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
