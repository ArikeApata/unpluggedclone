import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile ">
      <div className="container">
        <Link
          to="#sidebar2"
          className="d-block mt-3"
          role="button"
          aria-controls="sidebars"
          data-bs-toggle="offcanvas"
        >
          <nav className="nav-brand text-light p-2">
            <i className="bi bi-bell-fill notif"></i>
          </nav>
        </Link>

        <div className="text-center">
          <img
            src="/images/logo.png"
            alt=""
            className="img-fluid profile-logo p-3"
          />
        </div>
        <p className="lead text-light ">Recent Hosts you Follow</p>

        <div className="row mb-3 pb-3 text-light text-center align-items-center host">
          <div className="col-1 ">
            <img src="/images/firstimg.png" alt="" className="img-fluid" />
            <div className="text-light">
              <p>The Famou...</p>
            </div>
          </div>
          <div className="col-1">
            <img src="/images/kanetv.png" alt="" className="img-fluid c0l-1" />
            <div className="text-light">
              <p>KaneTV</p>
            </div>
          </div>
          <div className="col-1">
            <img
              src="/images/fourthimg.png"
              alt=""
              className="img-fluid c0l-1"
            />
            <div className="text-light">
              <p>JaneTheHou..</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items center">
          <p className="lead text-light">Recent Events you Joined</p>
          <i className="bi bi-list text-light icn"></i>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-3">
            <img src="/images/guitar-dude.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-3">
            <img src="/images/guitar-dude.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-3">
            <img src="/images/guitar-dude.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-3">
            <img src="/images/guitar-dude.jpg" alt="" className="img-fluid" />
          </div>
        </div>
        <div
          className="offcanvas bg-dark xxx offcanvas-start"
          id="sidebar2"
          tabIndex="-1"
          aria-labelledby="sidebar-label"
        >
          <div className="offcanvas-heading profile">
            <div className="offcanvas-header">
              <img
                src="/images/host-image1.png"
                alt=""
                className="img-fluid mx-auto img3 border border-secondary rounded-circle"
              />
            </div>
            <div className="offcanvas-body text-center text-light">
              <i className="bi bi-person-fill p-3 m-3 iccn"></i>

              <i className="bi bi-calendar2-minus p-3 m-3 iccn"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
