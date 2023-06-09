import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profiles, setProfiles] = useState([
    { img: "/images/firstimg.png", text: "The Famou..." },
    { img: "/images/firstimg.png", text: "The Famou..." },
    { img: "/images/firstimg.png", text: "The Famou..." },
    { img: "/images/firstimg.png", text: "The Famou..." },
    { img: "/images/firstimg.png", text: "The Famou..." },
    { img: "/images/firstimg.png", text: "The Famou..." },
    { img: "/images/firstimg.png", text: "The Famou..." },
    { img: "/images/firstimg.png", text: "The Famou..." },
    { img: "/images/firstimg.png", text: "The Famou..." },
    { img: "/images/firstimg.png", text: "The Famou..." },
  ]);
  return (
    <div className="profile mx-auto">
      <div className="container">
        <Link
          to="#sidebar2"
          className="d-block"
          role="button"
          aria-controls="sidebars"
          data-bs-toggle="offcanvas"
        >
          <nav className="nav-brand text-light p-2">
            <i className="bi bi-bell-fill notif"></i>
          </nav>
        </Link>

        <div className="">
          <img
            src="/images/logo.png"
            alt=""
            className="img-fluid profile-logo p-3"
          />
        </div>
        <p className="lead text-light ">Recent Hosts you Follow</p>

        <div className="mb-3 d-flex text-light align-items-center smallPicRoll">
          <div className="smallPic">
            <img src="/images/firstimg.png" alt="" className="img-fluid" />
            <div className="text-light text-center mt-2">
              <p>The Famou...</p>
            </div>
          </div>

          {profiles.map((p, index) => {
            return (
              <div className="smallPic" key={index}>
                <img src={p.img} alt="" className="img-fluid c0l-1" />
                <div className="text-light text-center mt-2">
                  <p>{p.text}</p>
                </div>
              </div>
            );
          })}
          {/* <div className="smallPic">
            <img
              src="/images/fourthimg.png"
              alt=""
              className="img-fluid c0l-1"
            />
            <div className="text-light text-center mt-2">
              <p>JaneTheHou..</p>
            </div>
          </div>
          <div className="smallPic">
            <img src="/images/firstimg.png" alt="" className="img-fluid" />
            <div className="text-light text-center mt-2">
              <p>The Famou...</p>
            </div>
          </div>
          <div className="smallPic">
            <img src="/images/kanetv.png" alt="" className="img-fluid c0l-1" />
            <div className="text-light text-center mt-2">
              <p>KaneTV</p>
            </div>
          </div>
          <div className="smallPic">
            <img
              src="/images/fourthimg.png"
              alt=""
              className="img-fluid c0l-1"
            />
            <div className="text-light text-center mt-2">
              <p>JaneTheHou..</p>
            </div>
          </div>
          <div className="smallPic">
            <img src="/images/firstimg.png" alt="" className="img-fluid" />
            <div className="text-light text-center mt-2">
              <p>The Famou...</p>
            </div>
          </div>
          <div className="smallPic">
            <img src="/images/kanetv.png" alt="" className="img-fluid c0l-1" />
            <div className="text-light text-center mt-2">
              <p>KaneTV</p>
            </div>
          </div>
          <div className="smallPic">
            <img
              src="/images/fourthimg.png"
              alt=""
              className="img-fluid c0l-1"
            />
            <div className="text-light text-center mt-2">
              <p>JaneTheHou..</p>
            </div>
          </div>
          <div className="smallPic">
            <img src="/images/firstimg.png" alt="" className="img-fluid" />
            <div className="text-light text-center mt-2">
              <p>The Famou...</p>
            </div>
          </div>
          <div className="smallPic">
            <img src="/images/kanetv.png" alt="" className="img-fluid c0l-1" />
            <div className="text-light text-center mt-2">
              <p>KaneTV</p>
            </div>
          </div>
          <div className="smallPic">
            <img
              src="/images/fourthimg.png"
              alt=""
              className="img-fluid c0l-1"
            />
            <div className="text-light text-center mt-2">
              <p>JaneTheHou..</p>
            </div>
          </div> */}
        </div>
        <div className="d-flex justify-content-between align-items center">
          <p className="lead text-light">Recent Events you Joined</p>
          <i className="bi bi-list text-light icn"></i>
        </div>
        <div className="row mx-auto justify-content-between ">
          <div className="col-sm-12 mb-3 col-md-6 col-lg-3 mx-auto">
            <img src="/images/youPage1.png" alt="" className="img-fluid" />
            <div className="desc-text">
              <p className="text-left text-light">30 Minutes Guitar Workshop</p>
              <p className="text-info">May 4- 11am</p>
            </div>
          </div>
          <div className="col-sm-12 mb-3 col-md-6 col-lg-3">
            <img src="/images/youPage2.png" alt="" className="img-fluid" />
            <div className="desc-text">
              <p className="text-left text-light">
                Happiness Meditation with Chocolate
              </p>
              <p className="text-info">May 5- 5pm</p>
            </div>
          </div>
          <div className="col-sm-12 mb-3 col-md-6 col-lg-3 mx-auto">
            <img src="/images/youPage3.png" alt="" className="img-fluid" />
            <div className="desc-text">
              <p className="text-left text-light">Cello Meditation Concert</p>
              <p className="text-info">May 4- 11am</p>
            </div>
          </div>
          <div className="col-sm-12 mb-3 col-md-6 col-lg-3">
            <img src="/images/youPage4.png" alt="" className="img-fluid" />
            <div className="desc-text">
              <p className="text-left text-light">
                Draw from Withun a New York Artist
              </p>
              <p className="text-info">May 4- 11am</p>
            </div>
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
              <i className="bi bi-grid-fill text-info p-3 my-5"></i>
              <i className="bi bi-person-fill p-3 my-5 "></i>
              <i className="bi bi-calendar2-minus p-3 my-5"></i>

              <footer>
                <i className="bi bi-arrow-right-square"></i>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
