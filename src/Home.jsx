import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="intro">
      <div className="container-fluid-lg ">
        <div className="row m-0 orpcy">
          <div className="col-md-4 h-100 py-2 d-none d-md-block">
            <img
              className="img-fluid home-image"
              src="/images/home-Image.jpg"
              alt=""
            />
          </div>
          <div className="col-md-8 mt-5 text-light text-center">
            <div className="login-forms mx-auto ">
              <div className="text-center my-3 py-3">
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="img-fluid img"
                  />
                </Link>
                <h5 className=" ">Login</h5>
              </div>

              <div className="text-center mb-3">
                <a href="#story" className="w-100 btn btn-primary">
                  <span>
                    <i className="bi bi-facebook px-3"></i>
                  </span>
                  login with facebook
                </a>
              </div>
              <div className="text-center">
                <a href="#story" className="w-100 btn insta">
                  <span>
                    <i className="bi bi-instagram px-3"></i>
                  </span>
                  login with instagram
                </a>
              </div>

              <div className="text-center">
                <div className="line-or my-3">
                  <hr />
                  <span>OR</span>
                  <hr />
                </div>
                <form action="">
                  <input
                    type="email"
                    className="form-control mb-3 bg-dark"
                    placeholder="scarlet.robinson@"
                  />
                  <input
                    type="password"
                    className="form-control mb-3 bg-dark"
                    placeholder="*****"
                  />
                  <button className="btn mt-4 login py-1 w-100 btn-teal">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
