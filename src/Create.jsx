import { Link } from "react-router-dom";
const Create = () => {
  return (
    <section className="create">
      <div className="container justify-content-center mx-auto">
        <div className="text-center">
          <h4 className="text-light">Become an event host</h4>
          <h6 class=" sidelinks">0% Complete</h6>
        </div>
        <div className="justify-content-between text">
          <Link
            to="#sidebar"
            className="d-block mt-3"
            role="button"
            aria-controls="sidebars"
            data-bs-toggle="offcanvas"
          >
            <img src="/images/logo.png" alt="" className="img-fluid img" />
          </Link>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-start bg-dark"
        id="sidebar"
        tabindex="-1"
        aria-labelledby="sidebar-label"
      >
        <div className="offcanvas-heading">
          <div class="offcanvas-heading">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="sidebar-label">
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
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div class="offcanvas-body">
              <ul className=" sidelinks">
                <li><Link>Events Generals</Link></li>
                <li><Link>Create Tickets</Link></li>
                <li><Link>Connect Social</Link></li>
                <li><Link>Preview Publish</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
